import React from 'react';
import { Link } from 'react-router-dom';
import './Greeting.scss';

export default function Greeting() {
    return (
        <div className="Greeting">
            <i className="Greeting-Icon Icon_type_tools"></i>           
            <div className="Greeting-Caption">Configure repository connection and synchronization settings</div>
            <Link to='/settings' style={{ textDecoration: 'none' }}>
                <button className="Button Button_color_primary Button_size_m font_size_s">Open settings</button>
            </Link>
        </div>
    );
}