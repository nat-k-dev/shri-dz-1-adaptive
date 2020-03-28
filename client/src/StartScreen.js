import React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';

export default function StartScreen() {
    return (
          <div className="Page Page_font_yandex">
              <Header start={true} />
    
              <main className="Main">
                  <div className="Container Container_align_centralize">
                      <div className="Greeting">
                          <i className="Greeting-Icon Icon_type_tools"></i>           
                          <div className="Greeting-Caption">Configure repository connection and synchronization settings</div>
                          <button className="Button Button_color_primary Button_size_m font_size_s" onclick="location.href='settings.html'">Open settings</button>
                      </div>
                  </div>
              </main>
    
              <Footer />  
          </div>
    );
};