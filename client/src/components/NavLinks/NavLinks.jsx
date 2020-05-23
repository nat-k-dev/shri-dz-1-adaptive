import React from 'react';
import i18next from './../../i18n';
import './NavLinks.scss';
import './../Footer/Footer.scss';
import { useTranslation } from 'react-i18next';

const changeLanguage = (currentLng) => {
    let newLanguage = 'en';
    if (currentLng === 'en') {
        newLanguage = 'ru';
    }
    i18next.changeLanguage(newLanguage);
  }

export default function NavLinks() {
    const { t, i18n } = useTranslation();
    
    return (
        <div className="NavLinks">
            <div className="NavLinks-Item Footer-NavLink">{t('support')}</div>
            <div className="NavLinks-Item Footer-NavLink">{t('learning')}</div>
            <button className="NavLinks-Item Footer-NavLink" onClick={() => changeLanguage(i18n.language)}>{t('language-version')}</button>
        </div>
    );
}