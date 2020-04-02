const path = require('path');
const axios = require('axios');
const https = require('https');
const express = require('express');
const cors = require('cors');
const { getFileContent } = require('./static_pages');
const { IsStr, IsNum } = require("./server_utils");
const { FindCommit, GitClone } = require("./git_utils");
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


function getErrorData(e) {
    return {
        status: (e.response && e.response.status) ? 
                            e.response.status 
                            : 400,
        data: (e.response && e.response.data) ?
                        JSON.stringify(e.response.data)
                        : e.message
    };
}

// получить извне сохраненные на сервере настройки через response
app.get('/api/settings', async (req, res) => {
    try {
        const apiResponse = await api.get('/conf');
        const serverSettings = apiResponse.data.data;
        if (serverSettings) {
            return res.status(200).send({
                repoName: serverSettings.repoName,
                buildCommand: serverSettings.buildCommand,
                mainBranch: serverSettings.mainBranch,
                period: serverSettings.period
            });
        } else {
            return res.status(500).send({ error: 'No conf settings data found' });
        }
    } catch (e) {
        const errInfo = getErrorData(e);
        return  res.status(errInfo.status).end(errInfo.data);
    }
});

// сохранить новые настройки из request 
app.post('/api/settings', async (req, res) => {
    console.log('POST /api/settings');
    try {
        if (!req.body) {
            throw new Error({message: 'Settings was not set in body', status: 500});
        }
        if (!IsStr(req.body.repoName) || !IsStr(req.body.buildCommand) || 
            !IsStr(req.body.mainBranch) || !IsNum(Number(req.body.period))) {
                throw new Error({message: 'Wrong data type in request', status: 500});
        }
        const serverSettings = {
            "repoName": req.body.repoName,
            "buildCommand": req.body.buildCommand,
            "mainBranch": req.body.mainBranch,
            "period": Number(req.body.period)
        }
        const apiResponse = await api.post('/conf', serverSettings);
        
        // git clone 
        await GitClone(req.body.repoName, req.body.mainBranch);
        return res.status(apiResponse.status).send(apiResponse.statusText);
    } catch (e) {
        const errInfo = getErrorData(e);
        return  res.status(errInfo.status).end(errInfo.data);
    }
});

// получить извне список сборок
app.get('/api/builds', async (req, res) => {
    try {
        const apiResponse = await api.get('/build/list', {
            params: {
                offset: req.params.offset || 0,
                limit: req.params.limit || 25
            }
        });
        if (apiResponse && apiResponse.data && apiResponse.data.data) {
            const buildsArray = apiResponse.data.data;
            res.status(200).send(buildsArray);
        } else {
            res.status(500).send({ error: 'No builds found' });
        }
    } catch (e) {
        const errInfo = getErrorData(e);
        return  res.status(errInfo.status).end(errInfo.data);
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
            throw new Error({message: 'Build settings are not found', status: 500});
        }
        const { commitMessage, authorName } = await FindCommit(commitHash, buildSettings.mainBranch);
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

        res.status(apiResponse.status).send(apiResponse.statusText);
    } catch (e) {
        const errInfo = getErrorData(e);
        return  res.status(errInfo.status).end(errInfo.data);
    }
});

// получить извне информацию о сборке с buildId
app.get('/api/builds/:buildId', async (req, res) => {
    console.log('GET /api/builds/:buildId');
    try {
        const buildId = req.params.buildId;
        if (!IsStr(buildId)) {
            throw new Error({message: 'Wrong data type in request', status: 500});
        }
        const params = { buildId: buildId };
        const apiResponse = await api.get('/build/details', { params });
        if (apiResponse.data && apiResponse.data.data) {
            const buildInfo = apiResponse.data.data;
            res.status(200).send(buildInfo);
        } else {
            res.status(500).send({ error: 'No build found' });
        }
    } catch (e) {
        const errInfo = getErrorData(e);
        return  res.status(errInfo.status).end(errInfo.data);
    }
});

// получить извне логи билда (сплошной текст)
app.get('/api/builds/:buildId/logs', async (req, res) => {
    try {
        const buildId = req.params.buildId;
        if (!IsStr(buildId)) {
            throw new Error('Wrong data type in request');
        }
        const params = { buildId: buildId };
        const apiResponse = await api.get('/build/log', { params });
        if (apiResponse.data) {
            const buildLog = apiResponse.data;
            res.status(200).send(buildLog);
        } else {
            res.status(500).send({ error: 'No build log found' });
        }
    } catch (e) {
        const errInfo = getErrorData(e);
        return  res.status(errInfo.status).end(errInfo.data);
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