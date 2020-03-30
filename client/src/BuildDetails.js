import React, {useState} from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import BuildCard from './components/BuildCard/BuildCard';
import BuildLog from './components/BuildLog/BuildLog';
import LoaderAnimation from './components/LoaderAnimation/LoaderAnimation';


// функция вызова бэкенда, чтобы получить информацию о билде по buildId
async function callBackendAPI(buildId) {
    console.log('send ', buildId);
    const response = await fetch('/api/builds/' + buildId);
    console.log('response ', response);
    const body = await response.json();
    if (response.status !== 200) {
        throw Error(body.message);
    }
    return body;
};

export default function BuildDetails({match}) {
    // пока нет ответа сервера, то показываем анимацию
    const [hasResponse, setHasResponse] = useState(false);
    // если нет деталей билда, то показываем ошибку
    const [hasDetails, setHasDetails] = useState(false);

    if (!match.params.id) {
        throw new Error('bad build id');
    }
    
    const buildId = match.params.id;
    console.log('props: ', buildId);
    

    callBackendAPI(buildId)
        .then(res => {
            console.log('res: ', res);
            /*
            {
  id: '83a55028-f1d7-4da7-a89f-f5fff4dbff44',
  configurationId: '9d2bf69a-fbe9-45b7-8bfe-2247b2970169',
  buildNumber: 1,
  commitMessage: 'string',
  commitHash: 'string',
  branchName: 'string',
  authorName: 'string',
  status: 'Waiting'
}
 */
            setHasDetails(true);
        })
        .catch(err => {
            console.log('catch in callBackendAPI: ', err);
        })
        .finally(() => setHasResponse(true));

    return (
        <div className="Page Page_font_yandex">
            <Header details={true} />

            <main className="Main">
                <div className="Container">
                    <ul className="BuildList font_size_s">
                        { !hasResponse ? (<LoaderAnimation />) : 
                            ( hasDetails ? 
                                (<BuildCard buildId={'Z1378'} buildCaption={'Zadd documentation for postgres scaler'} branchName={'Zmaster'} commitHash={'ZZ9f0b9'} authorName={'ZZPhilip Kirkorov'} date={'10 янв'} time={'01:16'} duration={'2 ч 40 мин'} />)
                                : <div>Wrong build Id in url: {buildId}</div>)
                        }
                    </ul>

                    <BuildLog />

                </div>
            </main>

            <Footer />
        </div>        
    );
}