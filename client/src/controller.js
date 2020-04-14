// функция вызова бэкенда, чтобы узнать, заданы ли settings на сервере
async function getApiSettings() {
    const response = await fetch('/api/settings');
    const body = await response.json();
    if (response.status !== 200 && response.status !== 500) {
        throw Error(body);
    }
    return body;
};

// функция вызова бэкенда, чтобы переслать settings на сервер
async function postApiSettings(state) {
    const response = await fetch('/api/settings', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            repoName: state.repoName,
            buildCommand: state.buildCommand,
            mainBranch: state.mainBranch,
            period: state.period
        })
    });
    if (response.status !== 200) {
        const body = await response.json();
        return body;
    }
};

// функция вызова бэкенда, чтобы получить билд лог
async function getApiBuildLog(buildId) {
    const response = await fetch('/api/builds/' + buildId + '/logs');
    const body = await response.json();
    if (response.status !== 200 && response.status !== 500) {
        throw Error(body.data);
    }
    return body.data;
};

// функция вызова бэкенда, чтобы получить информацию о билде по buildId
async function getApiBuildDetails(buildId) {
    const response = await fetch('/api/builds/' + buildId);
    const body = await response.json();
    if (response.status !== 200) {
        throw Error(body.data);
    }
    return body.data;
};

// функция вызова бэкенда, чтобы получить информацию о билдах
async function getApiBuilds() {
    const response = await fetch('/api/builds');
    const body = await response.json();
    if (response.status !== 200) {
        throw Error(body.data);
    }
    return body.data;
};

// функция вызова бэкенда, чтобы переслать commitHash на сервер
async function postApiCommitHash(commitHash) {
    const response = await fetch('/api/builds/' + commitHash, {
        method: 'POST'
    });
    if (response.status !== 200) {
        const body = await response.json();
        return body.data;
    }
};

module.exports = {
    getApiSettings,
    postApiSettings,
    getApiBuildLog,
    getApiBuildDetails,
    getApiBuilds,
    postApiCommitHash
}