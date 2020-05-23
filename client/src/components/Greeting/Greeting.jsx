import React from 'react';
import { Link } from 'react-router-dom';
import './Greeting.scss';
import './../PseudoLink/PseudoLink.scss';
import './../Icon/Icon.scss';
import './../Button/Button.scss';
import { useTranslation } from 'react-i18next';


export default function Greeting() {
    const { t } = useTranslation();
    return (
        <div className="Greeting">
            <i className="Greeting-Icon Icon_type_tools"></i>           
            <div className="Greeting-Caption">{t('greetings-caption')}</div>
            <Link to='/settings' className="PseudoLink">
                <button className="Button Button_color_primary Button_size_m font_size_s">{t('open-settings')}</button>
            </Link>
        </div>
    );
}