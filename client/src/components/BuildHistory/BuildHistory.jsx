import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import BuildCard from '../BuildCard/BuildCard';
import LoaderAnimation from '../LoaderAnimation/LoaderAnimation';
import { convertDateTime, convertDuration } from './../../utils';
import './../PseudoLink/PseudoLink.scss';

// функция вызова бэкенда, чтобы получить информацию о билдах
async function callBackendAPIBuild() {
    const response = await fetch('/api/builds');
    const body = await response.json();
    if (response.status !== 200) {
        throw Error(body.message);
    }
    return body;
};

export default function BuildHistory({history}) {
    // отправили запрос на сервер. Нужно, чтобы не отправлять повторяющиеся запросы
    const [hasRequest, setHasRequest] = useState(false);
    // пока нет ответа сервера, то показываем анимацию
    const [hasResponse, setHasResponse] = useState(false);
    // если нет деталей билда, то показываем ошибку
    const [builds, setBuilds] = useState([]);

    if (!hasRequest) {
        callBackendAPIBuild()
            .then(buildsList => {
                if (!hasResponse) {
                    setBuilds(buildsList.map(build => {
                        const start = build.start ? convertDateTime(build.start) : {time: '-', date: '-'};
                        const duration = build.duration ? convertDuration(build.duration) : '0 ч 0 мин';
                        return (
                            <Link to={'/build/' + build.id} className="PseudoLink" key={build.buildNumber}>
                                <BuildCard 
                                        keyProp={build.buildNumber} 
                                        buildId={build.id} 
                                        buildCaption={build.commitMessage} 
                                        branchName={build.branchName} 
                                        commitHash={build.commitHash} 
                                        authorName={build.authorName} 
                                        date={start.date} 
                                        time={start.time} 
                                        duration={duration}
                                        needAction={true} />
                            </Link>
                        );
                    }));
                    
                    setHasResponse(true);
                }
            })
            .catch(err => {
                console.log('catch in callBackendAPI: ', err);
                setHasResponse(false);
            })
            .finally(() => {});

        setHasRequest(true);
    }

    function handleBuildClick() {
        console.log('Build');
    }


    return (
        <div className="Page Page_font_yandex">
            <Header buildHistory={true}  history={history} handleBuildRebuildClick={handleBuildClick} />

            <main className="Main">
                <div className="Container">
                    { !hasResponse ? (<LoaderAnimation />) : 
                        (<ul className="BuildList font_size_s">
                            {builds}
                        </ul>)
                    }

                    <button className="Button Button_color_secondary Button_size_mixSM font_size_s">Show more</button>
                </div>
            </main>

            <Footer />    
        </div>
    );
}