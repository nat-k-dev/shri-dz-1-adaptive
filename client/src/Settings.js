import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

export default function Settings() {
    return (
        <div className="Page Page_font_yandex">
            <Header settings={true} />

            <main className="Main">
                <div className="Container">
                    <form className="Form" action="build_history.html" method="post">
                        <div className="Form-Item_align_vertical Form-Item_verticalSpace_l">
                            <h2 className="Form-Title">Settings</h2>
                            <div className="Form-Description">Configure repository connection and synshronization settings.</div>
                        </div>

                        <div className="Form-Item_align_vertical Form-Item_spaceBottom_m">
                            <label className="Form-Label Form-Item_spaceBottom_xs">GitHub repository<span className="Form-Label_color_mandatory">*</span></label>
                            <div className="Input">
                                <input className="Form-Input" type="text" placeholder="user-name/repo-name" required />
                                <i className="Input-DeleteTextIcon Icon_type_deleteText"></i>
                            </div>
                        </div>

                        <div className="Form-Item_align_vertical Form-Item_spaceBottom_m">
                            <label className="Form-Label Form-Item_spaceBottom_xs">Build command</label>
                            <div className="Input">
                                <input className="Form-Input" type="text" placeholder="npm ci && npm run build" />
                                <i className="Input-DeleteTextIcon Icon_type_deleteText"></i>
                            </div>
                        </div>
                        
                        <div className="Form-Item_align_vertical Form-Item_spaceBottom_l">
                            <label className="Form-Label Form-Item_spaceBottom_xs">Main branch</label>
                            <div className="Input">
                                <input className="Form-Input" type="text" placeholder="master" />
                                <i className="Input-DeleteTextIcon Icon_type_deleteText"></i>
                            </div>
                        </div>

                        <div className="Form-Item_align_horizontal Form-Item_spaceBottom_xl">
                            <label className="Form-Label Form-Item_spaceRight_s">Synchronize every </label>
                            <input className="Form-Input Form-InputNumber Form-Input_size_small Form-Item_spaceRight_s" type="text" placeholder="10" />
                            <label className="Form-Label">minutes</label>
                        </div>

                        <div className="Form-Item_align_adaptive">
                            <button type="submit" className="Button Button_color_primary Button_size_m Form-Button_gap_s font_size_s">Save</button>
                            <button type="button" formaction="start_screen.html" className="Button Button_color_secondary Button_size_m font_size_s">Cancel</button>
                        </div>

                    </form>
                </div>
            </main>

            <Footer /> 
        </div>
    );
}