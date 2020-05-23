import React, { useState } from 'react';
import {postApiSettings, getApiSettings} from './../../controller';
import Input from './../Input/Input';
import './Form.scss';
import './../Button/Button.scss';
import { useTranslation } from 'react-i18next';


export default function Form({history}) {
    const { t, i18n } = useTranslation();

    const [disableButton, setDisableButton] = useState(false);

    const initialState = {
        repoName: '',
        buildCommand: '',
        mainBranch: '',
        period: ''
    };
    const [state, setState] = useState(initialState);

    // отправили запрос на сервер. Нужно, чтобы не отправлять повторяющиеся запросы
    const [hasRequest, setHasRequest] = useState(false);
    // пока нет ответа сервера, то показываем анимацию
    const [hasResponse, setHasResponse] = useState(false);
    const [settingsFromServer, setSettingsFromServer] = useState({
        repoName: '',
        buildCommand: '',
        mainBranch: 'master',
        period: '10'
    });
    if (!hasRequest) {
        getApiSettings()
            .then(async res => {
                if (res.data) {
                    if (res.data.repoName) await setSettingsFromServer({...settingsFromServer, ['repoName']: res.data.repoName});
                    if (res.data.buildCommand) await setSettingsFromServer({...settingsFromServer, ['buildCommand']: res.data.buildCommand});
                    if (res.data.mainBranch) await setSettingsFromServer({...settingsFromServer, ['mainBranch']: res.data.mainBranch});
                    if (res.data.period) await setSettingsFromServer({...settingsFromServer, ['period']: res.data.period});
                    console.log('set',settingsFromServer);
                }
                
                setHasResponse(true);
            })
            .catch(err => console.log('HomePage: catch in getApiSettings: ', err));
        setHasRequest(true);
    }


    async function handleSubmitClick(event) {
        event.preventDefault();
        if (state.mainBranch.length === 0) await setState({...state, ['mainBranch']: 'master'});
        if (state.period.length === 0) await setState({...state, ['period']: '10'});
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

    function getPeriodTextCaption(index) {
        const count = state.period.length > 0 ? state.period : settingsFromServer.period;
        let key = 'form-period-caption';
        if (count > 1) {
            key = 'form-period-caption_plural';
        };
        if (i18n.language === 'ru-RU' && count > 1 && count < 5) {
            key = 'form-period-caption_plural_2';
        }
        const translation = t(key, {count});
        return translation.split(count)[index];
    }
    function getBeginningOfPeriodTextCaption() {
        return getPeriodTextCaption(0);
    }
    function getEndOfPeriodTextCaption() {
        return getPeriodTextCaption(1);
    }

    return (
        <form className="Form" onSubmit={handleSubmitClick} method="post">
            <div className="Form-Item_align_vertical Form-Item_verticalSpace_l">
                <h2 className="Form-Title">{t('settings-caption')}</h2>
                <div className="Form-Description">{t('settings-description')}</div>
            </div>

            <div className="Form-Item_align_vertical Form-Item_spaceBottom_m">
                <label className="Form-Label Form-Item_spaceBottom_xs">{t('form-repo-name-caption')}<span className="Form-Label_color_mandatory">*</span></label>
                { hasResponse && <Input id='repoName' placeholder={'user-name/repo-name'} isRequired={true} hasDeleteIcon={true} onChange={handleInputChange} value={settingsFromServer.repoName} />}
            </div>

            <div className="Form-Item_align_vertical Form-Item_spaceBottom_m">
                <label className="Form-Label Form-Item_spaceBottom_xs">{t('form-build-cmd-caption')}<span className="Form-Label_color_mandatory">*</span></label>
                { hasResponse && <Input id='buildCommand' placeholder={'npm ci && npm run build'} isRequired={true} hasDeleteIcon={true} onChange={handleInputChange} value={settingsFromServer.buildCommand} />}
            </div>
            
            <div className="Form-Item_align_vertical Form-Item_spaceBottom_l">
                <label className="Form-Label Form-Item_spaceBottom_xs">{t('form-branch-caption')}</label>
                { hasResponse && <Input id='mainBranch' placeholder={'master'} isRequired={false} hasDeleteIcon={true} onChange={handleInputChange} value={settingsFromServer.mainBranch} />}
            </div>

            <div className="Form-Item_align_horizontal Form-Item_spaceBottom_xl">
                <label className="Form-Label Form-Item_spaceRight_s">{getBeginningOfPeriodTextCaption()}</label>
                
                { hasResponse && <Input id='period' 
                                        placeholder={'10'} 
                                        isRequired={false} 
                                        hasDeleteIcon={false} 
                                        onChange={handleInputChange} 
                                        validate={isNumber} 
                                        additionalClasses='Form-InputNumber Form-Input_size_small Form-Item_spaceRight_s'  
                                        value={settingsFromServer.period} />}
                
                <label className="Form-Label">{getEndOfPeriodTextCaption()}</label>
            </div>

            <div className="Form-Item_align_adaptive">
                <button type="submit" disabled={disableButton} className="Button Button_color_primary Button_size_m Form-Button_gap_s font_size_s">{t('save-button')}</button>
                <button type="button" disabled={disableButton} onClick={handleCancelClick} className="Button Button_color_secondary Button_size_m font_size_s">{t('cancel-button')}</button>
            </div>

        </form>
    );
}