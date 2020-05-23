import React from 'react';
import './Footer.scss';
import NavLinks from './../NavLinks/NavLinks';
import './../Container/Container.scss';
import { useTranslation } from 'react-i18next';

export default function Footer() {
    const { t } = useTranslation();
    return (
        <footer className="Footer font_size_s Footer_spaceTop_s">
            <div className="Container Container_align_footer">
                <NavLinks />
                <div className="Footer-Copyright">&copy; 2020 {t('website-author')}</div>
            </div>
        </footer>
    );
}