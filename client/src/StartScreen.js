import React from 'react';

export default function Settings() {
    return (
          <div className="Page Page_font_yandex">
              <header className="Header">
                  <div className="Container Container_align_header">
                      <h1 className="Header-Caption Header-Caption_color_title font_size_xxl Header_spaces_h1">School CI server</h1>
                      <button className="Button Button_color_secondary Button_size_s font_size_s">
                          <i className="Button-Icon Icon_type_settings"></i>
                          <div className="Button-Caption">Settings</div>
                      </button>
                  </div>
              </header>
    
              <main className="Main">
                  <div className="Container Container_align_centralize">
                      <div className="Greeting">
                          <i className="Greeting-Icon Icon_type_tools"></i>           
                          <div className="Greeting-Caption">Configure repository connection and synchronization settings</div>
                          <button className="Button Button_color_primary Button_size_m font_size_s" onclick="location.href='settings.html'">Open settings</button>
                      </div>
                  </div>
              </main>
    
              <footer className="Footer font_size_s Footer_spaceTop_s">
                  <div className="Container Container_align_footer">
                      <div className="NavLinks">
                          <div className="NavLinks-Item Footer-NavLink">Support</div>
                          <div className="NavLinks-Item Footer-NavLink">Learning</div>
                      </div>
                      <div className="Footer-Copyright">&copy; 2020 Natalia Karaseva</div>
                  </div>
              </footer>  
          </div>
    );
};