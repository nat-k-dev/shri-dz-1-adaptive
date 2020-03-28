import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import BuildCard from './components/BuildCard/BuildCard';
import BuildLog from './components/BuildLog/BuildLog';

export default function BuildDetails() {
    return (
        <div className="Page Page_font_yandex">
            <Header details={true} />

            <main className="Main">
                <div className="Container">
                    <ul className="BuildList font_size_s">
                        <BuildCard buildId={'Z1378'} buildCaption={'Zadd documentation for postgres scaler'} branchName={'Zmaster'} commitHash={'ZZ9f0b9'} authorName={'ZZPhilip Kirkorov'} date={'10 янв'} time={'01:16'} duration={'2 ч 40 мин'} />
                    </ul>

                    <BuildLog />

                </div>
            </main>

            <Footer />
        </div>        
    );
}