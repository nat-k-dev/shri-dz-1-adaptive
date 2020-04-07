import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Form from '../Form/Form';
import './../Container/Container.scss';

export default function Settings({history}) {
    return (
        <div className="Page Page_font_yandex">
            <Header settings={true} />

            <main className="Main">
                <div className="Container">
                    <Form history={history} />
                </div>
            </main>

            <Footer /> 
        </div>
    );
}