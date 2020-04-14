const path = require('path');
const axios = require('axios');
const https = require('https');
const express = require('express');
const cors = require('cors');
const { isStr, isNum, invalidBuildCommand } = require("./server_utils");
const { findCommit, gitClone } = require("./git_utils");
const { Queue } = require('./server_queue');
require('dotenv').config({path: __dirname + './../.env'});

// Builds queue
const buildQueue = new Queue();
runBuildFromQueue(buildQueue);

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
app.get('/favicon.ico', (req, res) => res.status(204));
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

function getErrorData(e) {
    return {
        status: (e.response && e.response.status) ? 
                            e.response.status 
                            : 500,
        data: (e.response && e.response.data) ?
                        JSON.stringify(e.response.data)
                        : e.message
    };
}

// получить извне сохраненные на сервере настройки через response
app.get('/api/settings', async (req, res) => {
    console.log('GET /api/settings');
    try {
        const apiResponse = await api.get('/conf');
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
        const errInfo = getErrorData(e);
        console.log('get/api/settings errInfo: ', errInfo);
        return res.status(errInfo.status).send(errInfo);
    }
});

// сохранить новые настройки из request 
app.post('/api/settings', async (req, res) => {
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
        const serverSettings = {
            "repoName": req.body.repoName,
            "buildCommand": req.body.buildCommand,
            "mainBranch": req.body.mainBranch,
            "period": Number(req.body.period)
        }
        // git clone 
        await gitClone(req.body.repoName, req.body.mainBranch);
        const deleteResponse = await api.delete('/conf');
        if (deleteResponse.status !== 200) {
            throw {data: 'Error while deleting repository settings', status: deleteResponse.status};
        }
        const apiResponse = await api.post('/conf', serverSettings);
        return res.status(apiResponse.status).send({data: apiResponse.data.data, status: apiResponse.status});
    } catch (e) {
        const errInfo = getErrorData(e);
        console.log('post/api/settings errInfo: ', errInfo);
        return res.status(errInfo.status).send(errInfo);
    }
});

// получить извне список сборок
app.get('/api/builds', async (req, res) => {
    console.log('GET /api/builds');
    try {
        const apiResponse = await api.get('/build/list', {
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
        const errInfo = getErrorData(e);
        console.log('get/api/builds errInfo: ', errInfo);
        return res.status(errInfo.status).send(errInfo);
    }
});

// добавить сборку с commitHash в очередь сборок
app.post('/api/builds/:commitHash', async (req, res) => {
    console.log('POST /api/builds/:commitHash');
    try {
        const commitHash = req.params.commitHash;
        const buildConfResponse = await api.get('/conf');
        const buildSettings = buildConfResponse.data.data;
        if (!buildSettings) {
            throw {data: 'Build settings are not found', status: 500};
        }
        const { commitMessage, authorName } = await findCommit(commitHash.substring(0, 7), buildSettings.mainBranch);
        const commitSettings = {
            "commitMessage": commitMessage,
            "commitHash": commitHash,
            "branchName": buildSettings.mainBranch,
            "authorName": authorName
        }
        const apiResponse = await api.post('/build/request', commitSettings);
        console.log(apiResponse);
        
        // Постановка в очередь на сборку
        buildQueue.enqueue(commitHash);

        res.status(apiResponse.status).send({ data: apiResponse.data, status: apiResponse.status });
    } catch (e) {
        const errInfo = getErrorData(e);
        console.log('post/api/builds/:commitHash errInfo: ', errInfo);
        return res.status(errInfo.status).send(errInfo);
    }
});

// получить извне информацию о сборке с buildId
app.get('/api/builds/:buildId', async (req, res) => {
    console.log('GET /api/builds/:buildId');
    try {
        const buildId = req.params.buildId;
        if (!isStr(buildId)) {
            throw {data: 'Wrong data type in request', status: 500};
        }
        const params = { buildId: buildId };
        const apiResponse = await api.get('/build/details', { params });
        if (apiResponse.data && apiResponse.data.data) {
            const buildInfo = apiResponse.data.data;
            res.status(apiResponse.status).send({data: buildInfo, status: apiResponse.status});
        } else {
            res.status(500).send({ data: 'No build found', status: 500 });
        }
    } catch (e) {
        const errInfo = getErrorData(e);
        console.log('get/api/builds/:buildId errInfo: ', errInfo);
        return res.status(errInfo.status).send(errInfo);
    }
});

// получить извне логи билда (сплошной текст)
app.get('/api/builds/:buildId/logs', async (req, res) => {
    console.log('GET /api/builds/:buildId/logs');
    try {
        const buildId = req.params.buildId;
        if (!isStr(buildId)) {
            throw { data: 'Wrong data type in request', status: 400 };
        }
        const params = { buildId: buildId };
        const apiResponse = await api.get('/build/log', { params });
        if (apiResponse.data) {
            const buildLog = apiResponse.data;
            res.status(200).send({ data: buildLog, status: apiResponse.status });
        } else {
            res.status(500).send({ data: 'No build log found', status: 500 });
        }
    } catch (e) {
        const errInfo = getErrorData(e);
        console.log('get/api/builds/:buildId/logs errInfo: ', errInfo);
        return res.status(errInfo.status).send(errInfo);
    }
});

setInterval(async () => {
    const newCommits = []; // получить из гита новые коммиты, пока не сделано
    newCommits.forEach(commitHash => {
        buildQueue.enqueue(commitHash);
    });
}, 60000)

async function runBuildFromQueue() {
    const commitHash = buildQueue.front();
    // полупсевдокод:
    // Получить id билда
    // TODO
    // Поставить билду статус Running в свеггере
    // TODO
    // Запустить билд-агент
    // TODO
    // Поставить билду статус Finished в свеггере
    // TODO
    // Удалить из очереди сбилженный билд
    buildQueue.dequeue();

    if (buildQueue.front()) {
        setImmediate(runBuildFromQueue);
    } else {
        const intervalId = setInterval(() => {
            if (buildQueue.front()) {
                clearInterval(intervalId);
                setImmediate(runBuildFromQueue);
            }
        }, 10000);

    }
};
runBuildFromQueue();

app.listen(5000);
console.log('Listening on localhost:5000');