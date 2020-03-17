const path = require('path');
const axios = require('axios');
const https = require('https');
const express = require('express');
const { authToken } = require('./authTokens/auth.token');
const { getFileContent } = require('./static_pages');
const { IsStr, IsNum } = require("./server_utils");
const { FindCommit, GitClone } = require("./git_utils")

// build api
const api = axios.create({
    baseURL: 'https://hw.shri.yandex/api',
    headers: { Authorization: "Bearer " + authToken },
    httpsAgent: new https.Agent({ rejectUnauthorized: false })
});

// Express.js
const app = express();
app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'static')));
app.get('/favicon.ico', (req, res) => res.status(204));

// отдаем верстку
app.get('/', (req, res) => { getFileContent(path.resolve(__dirname, './static/start_screen.html'), res); });
app.get('/settings', (req, res) => { getFileContent(path.resolve(__dirname, './static/settings.html'), res); });
app.get('/build_history', (req, res) => { getFileContent(path.resolve(__dirname, './static/build_history.html'), res); });
app.get('/build_details', (req, res) => { getFileContent(path.resolve(__dirname, './static/build_details.html'), res); });

// получить извне сохраненные на сервере настройки через response
app.get('/api/settings', async (req, res) => {
    try {
        const apiResponse = await api.get('/conf');
        const serverSettings = apiResponse.data.data;
        if (serverSettings) {
            res.status(200).send({
                repoName: serverSettings.repoName,
                buildCommand: serverSettings.buildCommand,
                mainBranch: serverSettings.mainBranch,
                period: serverSettings.period
            });
        } else {
            res.status(500).send({ error: 'No conf settings data found' });
        }
    } catch (e) {
        console.log(e);
    }
});

// сохранить новые настройки из request 
app.post('/api/settings', async (req, res) => {
    try {
        if (!req.body) {
            throw new Error('Settings was not set in body');
        }
        if (!IsStr(req.body.repoName) || !IsStr(req.body.buildCommand) || 
            !IsStr(req.body.mainBranch) || !IsNum(Number(req.body.period))) {
                throw new Error('Wrong data type in request');
        }
        const serverSettings = {
            "repoName": req.body.repoName,
            "buildCommand": req.body.buildCommand,
            "mainBranch": req.body.mainBranch,
            "period": Number(req.body.period)
        }
        const apiResponse = await api.post('/conf', serverSettings);
        res.status(apiResponse.status).send(apiResponse.statusText);
        
        // git clone 
        GitClone(req.body.repoName, req.body.mainBranch);
    } catch (e) {
        console.log(e); 
    }
    
});

// получить извне список сборок
app.get('/api/builds', async (req, res) => {
    try {
        const apiResponse = await api.get('/build/list');
        const buildsArray = apiResponse.data.data;
        if (buildsArray) {
            res.status(200).send(buildsArray);
        } else {
            res.status(500).send({ error: 'No builds found' });
        }
    } catch (e) {
        console.log(e);
    }
});

// добавить сборку с commitHash в очередь сборок
app.post('/api/builds/:commitHash', async (req, res) => {
    try {
        const commitHash = req.params.commitHash;
        const buildConfResponse = await api.get('/conf');
        const buildSettings = buildConfResponse.data.data;
        if (!buildSettings) {
            throw new Error('Build settings are not found');
        }
        const { commitMessage, authorName } = await FindCommit(commitHash, buildSettings.mainBranch);
        const commitSettings = {
            "commitMessage": commitMessage,
            "commitHash": commitHash,
            "branchName": buildSettings.mainBranch,
            "authorName": authorName
        }
        const apiResponse = await api.post('/build/request', commitSettings);
        res.status(apiResponse.status).send(apiResponse.statusText);
    } catch (e) {
        console.log(e);
    }
});

// получить извне информацию о сборке с buildId
app.get('/api/builds/:buildId', async (req, res) => {
    try {
        const buildId = req.params.buildId;
        if (!IsStr(buildId)) {
            throw new Error('Wrong data type in request');
        }
        const params = { buildId: buildId };
        const apiResponse = await api.get('/build/details', { params });
        const buildInfo = apiResponse.data.data;
        console.log(buildInfo);
        if (buildInfo) {
            res.status(200).send(buildInfo);
        } else {
            res.status(500).send({ error: 'No build found' });
        }
    } catch (e) {
        console.log(e);
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
        const buildLog = apiResponse.data.data;
        console.log(buildLog);
        if (buildLog) {
            res.status(200).send(buildLog);
        } else {
            res.status(500).send({ error: 'No build log found' });
        }
    } catch (e) {
        console.log(e);
    }
});


app.listen(3000);
console.log('Listening on localhost:3000');