import React, { useState } from 'react';
import StartScreen from '../StartScreen/StartScreen';
import BuildHistory from '../BuildHistory/BuildHistory';
import LoaderAnimation from './../LoaderAnimation/LoaderAnimation';

// функция вызова бэкенда, чтобы узнать, заданы ли settings на сервере
async function callBackendAPI() {
    const response = await fetch('/api/settings');
    const body = await response.json();
    if (response.status !== 200 && response.status !== 500) {
        throw Error(body.data);
    }
    return body;
};

export default function HomePage({history}) {
    // пока нет ответа сервера, то показываем анимацию
    const [hasResponse, setHasResponse] = useState(false);
    // если нет настроек, то показываем страницу StartScreen, иначе страницу со списком билдов
    const [hasSettings, setHasSettings] = useState(false);
    
    callBackendAPI()
        .then(res => {
            // бэкенд возвращает ошибку, что настройки не заданы, обрабатываем
            // ее, и показываем страницу StartScreen
            if (res.error && res.error === 'No conf settings data found') {
                console.log('The settings are not specified');
                setHasSettings(false);
            }
            // если в ответе с бэкенда есть репозиторий, ветка, билд-команда, то все ок,
            // отображаем страницу со списком билдов
            if (res.repoName && res.mainBranch && res.buildCommand) {
                setHasSettings(true);
            }
            setHasResponse(true);
        })
        .catch(err => console.log('catch in callBackendAPI: ', err));

    return (
        <>
            { !hasResponse ? (<LoaderAnimation />) : 
                (hasSettings ? (<BuildHistory history={history} />) : (<StartScreen history={history} />)) 
            }
        </>
    );
}