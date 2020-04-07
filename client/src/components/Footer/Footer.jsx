import React from 'react';
import './Footer.scss';
import NavLinks from './../NavLinks/NavLinks';
import './../Container/Container.scss';

export default function Footer() {
    return (
        <footer className="Footer font_size_s Footer_spaceTop_s">
            <div className="Container Container_align_footer">
                <NavLinks />
                <div className="Footer-Copyright">&copy; 2020 Natalia Karaseva</div>
            </div>
        </footer>
    );
}