import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Form from './components/Form/Form';

export default function Settings() {
    return (
        <div className="Page Page_font_yandex">
            <Header settings={true} />

            <main className="Main">
                <div className="Container">
                    <Form />
                </div>
            </main>

            <Footer /> 
        </div>
    );
}