import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Greeting from '../Greeting/Greeting';

export default function StartScreen({history}) {
    return (
          <div className="Page Page_font_yandex">
              <Header start={true} history={history} />
    
              <main className="Main">
                  <div className="Container Container_align_centralize">
                      <Greeting />
                  </div>
              </main>
    
              <Footer />  
          </div>
    );
};