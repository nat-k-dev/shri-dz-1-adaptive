import React, { useState } from 'react';
import './Input.scss';


export default function Input({id, placeholder, isRequired, hasDeleteIcon, onChange, additionalClasses, validate}) {

    const inputClass = additionalClasses ? ('Form-Input ' + additionalClasses) : 'Form-Input';

    const [state, setState] = useState('');
    function handleChange(event) {
        if (validate && !validate(event.target.value)) {
            setState('');
            onChange(id, '');
            return;
        }
        setState(event.target.value);
        onChange(id, event.target.value);
    };

    function handleDeleteTextClick(event) {
        event.preventDefault();
        setState('');
    }
    
    return (
        <div className="Input">
            { isRequired ? 
                (<input className={inputClass} type="text" value={state} onChange={handleChange} placeholder={placeholder} required />) :
                (<input className={inputClass} type="text" value={state} onChange={handleChange} placeholder={placeholder}  />)
            }
            { hasDeleteIcon && 
                <button onClick={handleDeleteTextClick} className="Input-DeleteTextIcon Icon_type_deleteText"></button>
            }
        </div>
    );
}