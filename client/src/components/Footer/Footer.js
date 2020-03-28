import React from 'react';
import './Footer.scss';

export default function Footer() {
    return (
        <footer className="Footer font_size_s Footer_spaceTop_s">
            <div className="Container Container_align_footer">
                <div className="NavLinks">
                    <div className="NavLinks-Item Footer-NavLink">Support</div>
                    <div className="NavLinks-Item Footer-NavLink">Learning</div>
                </div>
                <div className="Footer-Copyright">&copy; 2020 Natalia Karaseva</div>
            </div>
        </footer>
    );
}