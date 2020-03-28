import React from 'react';
import classnames from 'classnames';

export default function Header({start, settings, history, details}) {
    let containerClass = classnames({
        'Container': true,
        'Container_align_header': start,
        'Container_align_headerBuild': history || details
    });
    let buttonIconClass = classnames({
        'Button-Icon': true,
        'Icon_type_build': history,
        'Icon_type_rebuild': details
    });
    let buttonText = undefined;
    if (history) buttonText = "Run build";
    if (details) buttonText = "Rebuild";
    return (
        <header className="Header">
            <div className={containerClass}>
                { (start || settings) &&
                    <h1 className="Header-Caption Header-Caption_color_title font_size_xxl Header_spaces_h1">School CI server</h1>
                }
                { (history || details) &&
                    <h1 className="Header-Caption font_size_xxl Header_spaces_h1">philip1967/my-awesome-repo</h1>
                }
                
                { start &&
                    <button className="Button Button_color_secondary Button_size_s font_size_s">
                        <i className={buttonIconClass}></i>
                        <div className="Button-Caption">Settings</div>
                    </button>
                }

                { (history || details) && 
                    <div className="Container_align_header Container_width_buttons">
                        <button className="Button Button_color_secondary Button_size_s Button_gap_s font_size_s">
                            <i className="Button-Icon Icon_type_build"></i>             
                            <div className="Button-Caption">{buttonText}</div>
                        </button>
                        <button className="Button Button_color_secondary Button_size_xs font_size_s">
                            <i className="Button-Icon Icon_type_settings"></i>
                        </button>
                    </div>
                }
            </div>
        </header>
    );
}