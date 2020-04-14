import React, { useState } from 'react';
import {postApiSettings} from './../../controller';
import Input from './../Input/Input';
import './Form.scss';
import './../Button/Button.scss';


export default function Form({history}) {
    const [disableButton, setDisableButton] = useState(false);

    const initialState = {
        repoName: '',
        buildCommand: 'npm build',
        mainBranch: 'master',
        period: '10'
    };
    const [state, setState] = useState(initialState);



    function handleSubmitClick(event) {
        event.preventDefault();
        postApiSettings(state)
            .then(res => {
                if (res && res.status === 500) {
                    alert(res.data);
                } 
            })
            .catch(err => {
                alert(err.data);
                console.log('Form: catch in postApiSettings: ', err);
            })
            .finally(() => {
                console.log('Enable buttons');
                setDisableButton(false);
            });
        console.log('Disable buttons');
        setDisableButton(true);
    }
    function handleCancelClick() {
        history.goBack();
    }
    function handleInputChange(fieldId, fieldValue) {
        setState({...state, [fieldId]: fieldValue});
    }
    function isNumber(fieldValue) {
        return !isNaN(Number(fieldValue));
    }

    
    return (
        <form className="Form" onSubmit={handleSubmitClick} method="post">
            <div className="Form-Item_align_vertical Form-Item_verticalSpace_l">
                <h2 className="Form-Title">Settings</h2>
                <div className="Form-Description">Configure repository connection and synshronization settings.</div>
            </div>

            <div className="Form-Item_align_vertical Form-Item_spaceBottom_m">
                <label className="Form-Label Form-Item_spaceBottom_xs">GitHub repository<span className="Form-Label_color_mandatory">*</span></label>
                <Input id='repoName' placeholder={'user-name/repo-name'} isRequired={true} hasDeleteIcon={true} onChange={handleInputChange} />
            </div>

            <div className="Form-Item_align_vertical Form-Item_spaceBottom_m">
                <label className="Form-Label Form-Item_spaceBottom_xs">Build command<span className="Form-Label_color_mandatory">*</span></label>
                <Input id='buildCommand' placeholder={'npm ci && npm run build'} isRequired={true} hasDeleteIcon={true} onChange={handleInputChange} />
            </div>
            
            <div className="Form-Item_align_vertical Form-Item_spaceBottom_l">
                <label className="Form-Label Form-Item_spaceBottom_xs">Main branch</label>
                <Input id='mainBranch' placeholder={'master'} isRequired={false} hasDeleteIcon={true} onChange={handleInputChange} />
            </div>

            <div className="Form-Item_align_horizontal Form-Item_spaceBottom_xl">
                <label className="Form-Label Form-Item_spaceRight_s">Synchronize every </label>
                <Input id='period' placeholder={'10'} isRequired={false} hasDeleteIcon={false} onChange={handleInputChange} validate={isNumber} additionalClasses='Form-InputNumber Form-Input_size_small Form-Item_spaceRight_s' />
                <label className="Form-Label">minutes</label>
            </div>

            <div className="Form-Item_align_adaptive">
                <button type="submit" disabled={disableButton} className="Button Button_color_primary Button_size_m Form-Button_gap_s font_size_s">Save</button>
                <button type="button" disabled={disableButton} onClick={handleCancelClick} className="Button Button_color_secondary Button_size_m font_size_s">Cancel</button>
            </div>

        </form>
    );
}