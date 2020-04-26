import path from 'path';
import axios from 'axios';
import https from 'https';
import express from 'express';
import cors from 'cors';
import { isStr, isNum, invalidBuildCommand, getErrorData, ServerError, GeneralError } from  "./server_utils";
import { findCommit, gitClone, CommitInfo } from "./git_utils";
import dotenv from 'dotenv';
dotenv.config({path: __dirname + './../.env'});
import {BuildRequestResultModelApiResponse,
        BuildModelApiResponse,
        BuildModel,
        ConfigurationInput,
        BuildModelArrayApiResponse,
        ConfigurationModelApiResponse } from './api_types';

// build api
const api = axios.create({
    baseURL: 'https://hw.shri.yandex/api',
    headers: { Authorization: "Bearer " + process.env.API_TOKEN },
    httpsAgent: new https.Agent({ rejectUnauthorized: false })
});

// Express.js
const app = express();
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'static')));
app.get<{}, number>('/favicon.ico', (req, res) => res.status(204));
app.use(cors());

/* Список доступных ручек:
    get '/api/settings'
    post '/api/settings' 
        body:{"repoName": string,
                "buildCommand": string,
                "mainBranch": string,
                "period": string}
    get '/api/builds' 
            header.params: offset, limit
    post '/api/builds/:commitHash'
            url-params: commitHash
            возвращает json {data: {
                                    id: '15692e06-1754-4c17-9c79-b61bb1bc04c4',
                                    buildNumber: 6,
                                    status: 'Waiting'
                            }}
    get '/api/builds/:buildId'
            url-params: buildId
    get '/api/builds/:buildId/logs'
            url-params: buildId
*/

// общий тип для всех ответов сервера
export type ResponseType<T> = {
    status: number,
    data: T | string
}


export type SettingsGet = ConfigurationInput;

// получить извне сохраненные на сервере настройки через response
app.get<{}, ResponseType<SettingsGet>>('/api/settings', async (req, res) => {
    console.log('GET /api/settings');
    try {
        const apiResponse = await api.get<ConfigurationModelApiResponse>('/conf');
        const serverSettings = apiResponse.data.data;
        if (serverSettings) {
            return res.status(200).send( {
                data: {
                        repoName: serverSettings.repoName,
                        buildCommand: serverSettings.buildCommand,
                        mainBranch: serverSettings.mainBranch,
                        period: serverSettings.period
                    },
                status: 200 });
        } else {
            return res.status(500).send({ status: 500, data: 'No conf settings data found' });
        }
    } catch (e) {
        const errInfo: ServerError = getErrorData(e);
        console.log('get/api/settings errInfo: ', errInfo);
        return res.status(errInfo.status).send(errInfo);
    }
});

export type SettingsPost = string;
export type RequestSettingsPost = ConfigurationInput;

// сохранить новые настройки из request 
app.post<{}, ResponseType<SettingsPost>, RequestSettingsPost>('/api/settings', async (req, res) => {
    console.log('POST /api/settings');
    try {
        if (!req.body) {
            throw {data: 'Settings was not set in body', status: 500};
        }
        if (!isStr(req.body.repoName) || !isStr(req.body.buildCommand) || 
            !isStr(req.body.mainBranch) || !isNum(Number(req.body.period))) {
                throw {data: 'Wrong data type in request', status: 500};
        }
        if (invalidBuildCommand(req.body.buildCommand)) {
            throw {data: 'Invalid build command', status: 500};
        }
        console.log('START');
        const serverSettings = {
            "repoName": req.body.repoName,
            "buildCommand": req.body.buildCommand,
            "mainBranch": req.body.mainBranch,
            "period": Number(req.body.period)
        }
        // git clone 
        await gitClone(req.body.repoName, req.body.mainBranch);
        const deleteResponse = await api.delete<null>('/conf');
        if (deleteResponse.status !== 200) {
            throw {data: 'Error while deleting repository settings', status: deleteResponse.status};
        }
        const apiResponse = await api.post<string>('/conf', serverSettings);
        return res.status(apiResponse.status).send({data: JSON.stringify(apiResponse.data), status: apiResponse.status});
    } catch (e) {
        const errInfo: ServerError = getErrorData(e);
        console.log('post/api/settings errInfo: ', errInfo);
        return res.status(errInfo.status).send(errInfo);
    }
});

type GetBuildsParams = { 
    offset: string, // странно, что typescript тут ругается на number 
    limit: string // Ведь в БД https://hw.shri.yandex/api/index.html указано, что тип integer. 
 };

export type BuildsGet = BuildModel[] | string;

// получить извне список сборок
app.get<GetBuildsParams, ResponseType<BuildsGet>>('/api/builds', async (req, res) => {
    console.log('GET /api/builds');
    try {
        const apiResponse = await api.get<BuildModelArrayApiResponse>('/build/list', {
            params: {
                offset: req.params.offset || 0,
                limit: req.params.limit || 25
            }
        });
        if (apiResponse && apiResponse.data && apiResponse.data.data) {
            const buildsArray = apiResponse.data.data;
            res.status(apiResponse.status).send({data: buildsArray, status: apiResponse.status});
        } else {
            res.status(500).send({ data: 'No builds found', status: 500 });
        }
    } catch (e) {
        const errInfo: ServerError = getErrorData(e);
        console.log('get/api/builds errInfo: ', errInfo);
        return res.status(errInfo.status).send(errInfo);
    }
});

type CommitHashParam = { commitHash: string };
export type CommitPost = string;

// добавить сборку с commitHash в очередь сборок
app.post<CommitHashParam, ResponseType<CommitPost>>('/api/builds/:commitHash', async (req, res) => {
    console.log('POST /api/builds/:commitHash');
    try {
        const commitHash = req.params.commitHash;
        const buildConfResponse = await api.get<ConfigurationModelApiResponse>('/conf');
        const buildSettings = buildConfResponse.data.data;
        if (!buildSettings) {
            throw {data: 'Build settings are not found', status: 500};
        }
        const commitInfo: CommitInfo = await findCommit(commitHash.substring(0, 7));
        const commitSettings = {
            "commitMessage": commitInfo.commitMessage,
            "commitHash": commitHash,
            "branchName": buildSettings.mainBranch,
            "authorName": commitInfo.authorName
        }
        const apiResponse = await api.post<BuildRequestResultModelApiResponse>('/build/request', commitSettings);
        console.log(apiResponse);
        
        res.status(apiResponse.status).send({ data: JSON.stringify(apiResponse.data), status: apiResponse.status });
    } catch (e) {
        const errInfo: ServerError = getErrorData(e);
        console.log('post/api/builds/:commitHash errInfo: ', errInfo);
        return res.status(errInfo.status).send(errInfo);
    }
});

type BuildIdParam = { buildId: string };
export type BuildIdGet = BuildModel;

// получить извне информацию о сборке с buildId
app.get<BuildIdParam, ResponseType<BuildIdGet>>('/api/builds/:buildId', async (req, res) => {
    console.log('GET /api/builds/:buildId');
    try {
        const id = req.params.buildId;
        if (!isStr(id)) {
            throw {data: 'Wrong data type in request', status: 500};
        }
        const params = { buildId: id };
        const apiResponse = await api.get<BuildModelApiResponse>('/build/details', { params });
        if (apiResponse.data && apiResponse.data.data) {
            const buildInfo = apiResponse.data.data;
            res.status(apiResponse.status).send({data: buildInfo, status: apiResponse.status});
        } else {
            res.status(500).send({ data: 'No build found', status: 500 });
        }
    } catch (e) {
        const errInfo: ServerError = getErrorData(e);
        console.log('get/api/builds/:buildId errInfo: ', errInfo);
        return res.status(errInfo.status).send(errInfo);
    }
});

export type BuildLogGet = string;

// получить извне логи билда (сплошной текст)
app.get<BuildIdParam, ResponseType<BuildLogGet>>('/api/builds/:buildId/logs', async (req, res) => {
    console.log('GET /api/builds/:buildId/logs');
    try {
        const id = req.params.buildId;
        if (!isStr(id)) {
            throw { data: 'Wrong data type in request', status: 400 };
        }
        const params = { buildId: id };
        const apiResponse = await api.get<string>('/build/log', { params });
        if (apiResponse.data) {
            const buildLog = apiResponse.data;
            res.status(200).send({ data: buildLog, status: apiResponse.status });
        } else {
            res.status(500).send({ data: 'No build log found', status: 500 });
        }
    } catch (e) {
        const errInfo: ServerError = getErrorData(e);
        console.log('get/api/builds/:buildId/logs errInfo: ', errInfo);
        return res.status(errInfo.status).send(errInfo);
    }
});

app.listen(5000);
console.log('Listening on localhost:5000');