import React, {useState} from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import BuildCard from './components/BuildCard/BuildCard';
import BuildLog from './components/BuildLog/BuildLog';
import LoaderAnimation from './components/LoaderAnimation/LoaderAnimation';

// функция вызова бэкенда, чтобы получить билд лог
async function callBackendAPIBuildLog(buildId) {
    const response = await fetch('/api/builds/' + buildId + '/logs');
    const body = await response.text();
    if (response.status !== 200 && response.status !== 500) {
        throw Error(body.message);
    }
    return body;
};

// функция вызова бэкенда, чтобы получить информацию о билде по buildId
async function callBackendAPIBuildDetails(buildId) {
    const response = await fetch('/api/builds/' + buildId);
    const body = await response.json();
    if (response.status !== 200) {
        throw Error(body.message);
    }
    return body;
};

function convertDateTime(str) {
    return {
        time: '-',
        date: '-'
    }
}

function convertDuration(nmb) {
    return '0 ч 0 мин';
}

export default function BuildDetails({match, history}) {
    // отправили запрос на сервер. Нужно, чтобы не отправлять повторяющиеся запросы
    const [hasRequest, setHasRequest] = useState(false);
    // пока нет ответа сервера, то показываем анимацию
    const [hasResponse, setHasResponse] = useState(false);
    // если нет деталей билда, то показываем ошибку
    const [hasDetails, setHasDetails] = useState(false);
    // детали билда
    const [details, setDetails] = useState({
        id: '',
        configurationId: '',
        buildNumber: -1,
        commitMessage: '',
        commitHash: '',
        branchName: '',
        authorName: '',
        status: '',
        start: { date: '', time: ''},
        duration: 0
    });
    // если нет лога билда, то показываем ошибку
    const [hasBuildLog, setHasBuildLog] = useState(false);
    // лог билда
    const [buildLog, setBuildLog] = useState('');

    if (!match.params.id) {
        throw new Error('bad build id');
    }
    
    const buildId = match.params.id;

    if (!hasRequest) {
        callBackendAPIBuildDetails(buildId)
            .then(res => {
                console.log('build details response: ', res);
                const start = res.start ? convertDateTime(res.start) : {time: '-', date: '-'};
                const duration = res.duration ? convertDuration(res.duration) : '0 ч 0 мин';
                if (!hasDetails) {
                    setDetails({
                        id: res.id,
                        configurationId: res.configurationId,
                        buildNumber: res.buildNumber,
                        commitMessage: res.commitMessage,
                        commitHash: res.commitHash,
                        branchName: res.branchName,
                        authorName: res.authorName,
                        status: res.status,
                        start: start,
                        duration: duration
                    });
                    setHasDetails(true);
                }
            })
            .catch(err => {
                console.log('catch in callBackendAPIBuildDetails: ', err);
                setHasDetails(false);
            })
            .finally(() => setHasResponse(true));

        callBackendAPIBuildLog(buildId)
            .then(res => {
                console.log('build log response: ', res);
                if (!hasBuildLog) {
                    if (res.error) {
                        setBuildLog(res.error);
                    } else {
                        setBuildLog(res);
                    }
                    setHasBuildLog(true);
                }
            })
            .catch(err => {
                console.log('catch in callBackendAPIBuildLog: ', err);
                setHasBuildLog(false);
            })
            .finally(() => setHasResponse(true));
        setHasRequest(true);
    }

    return (
        <div className="Page Page_font_yandex">
            <Header details={true}  history={history} />

            <main className="Main">
                <div className="Container">
                    { !hasResponse ? (<LoaderAnimation />) : 
                        (<>
                            <ul className="BuildList font_size_s">
                                { hasDetails ? 
                                        (<BuildCard 
                                            buildId={details.buildNumber} 
                                            buildCaption={details.commitMessage} 
                                            branchName={details.branchName} 
                                            commitHash={details.commitHash} 
                                            authorName={details.authorName} 
                                            date={details.start.date} 
                                            time={details.start.time} 
                                            duration={details.duration} />)
                                        : (<div>Build details were not found. Probably, wrong build Id in url: {buildId}</div>)
                                }
                            </ul>
                            <BuildLog logText={buildLog} />
                        </>
                        ) 
                    }
                </div>
            </main>

            <Footer />
        </div>        
    );
}