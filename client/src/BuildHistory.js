import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import BuildCard from './components/BuildCard/BuildCard';

export default function BuildHistory() {
    const buildsData = [
        <BuildCard key='0' buildId={'Z1378'} buildCaption={'Zadd documentation for postgres scaler'} branchName={'Zmaster'} commitHash={'ZZ9f0b9'} authorName={'ZZPhilip Kirkorov'} date={'10 янв'} time={'01:16'} duration={'2 ч 40 мин'} />,
        <BuildCard key='1' buildId={'Z1378'} buildCaption={'Zadd documentation for postgres scaler'} branchName={'Zmaster'} commitHash={'ZZ9f0b9'} authorName={'ZZPhilip Kirkorov'} date={'10 янв'} time={'01:16'} duration={'2 ч 40 мин'} />,
        <BuildCard key='2' buildId={'Z1378'} buildCaption={'Zadd documentation for postgres scaler'} branchName={'Zmaster'} commitHash={'ZZ9f0b9'} authorName={'ZZPhilip Kirkorov'} date={'10 янв'} time={'01:16'} duration={'2 ч 40 мин'} />,
        <BuildCard key='3' buildId={'Z1378'} buildCaption={'Zadd documentation for postgres scaler'} branchName={'Zmaster'} commitHash={'ZZ9f0b9'} authorName={'ZZPhilip Kirkorov'} date={'10 янв'} time={'01:16'} duration={'2 ч 40 мин'} />,
        <BuildCard key='4' buildId={'Z1378'} buildCaption={'Zadd documentation for postgres scaler'} branchName={'Zmaster'} commitHash={'ZZ9f0b9'} authorName={'ZZPhilip Kirkorov'} date={'10 янв'} time={'01:16'} duration={'2 ч 40 мин'} />,
        <BuildCard key='5' buildId={'Z1378'} buildCaption={'Zadd documentation for postgres scaler'} branchName={'Zmaster'} commitHash={'ZZ9f0b9'} authorName={'ZZPhilip Kirkorov'} date={'10 янв'} time={'01:16'} duration={'2 ч 40 мин'} />
    ];

    return (
        <div className="Page Page_font_yandex">
            <Header buildHistory={true} />

            <main className="Main">
                <div className="Container">
                    <ul className="BuildList font_size_s">
                        {buildsData}
                    </ul>

                    <button className="Button Button_color_secondary Button_size_mixSM font_size_s">Show more</button>
                </div>
            </main>

            <Footer />    
        </div>
    );
}