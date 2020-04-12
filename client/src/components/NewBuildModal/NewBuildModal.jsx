import React, { useState } from 'react';
import Input from './../Input/Input';
import './NewBuildModal.scss';
import './../Form/Form.scss';
import './../Button/Button.scss';


// функция вызова бэкенда, чтобы переслать commitHash на сервер
async function callBackendAPI(commitHash) {
    const response = await fetch('/api/builds/' + commitHash, {
        method: 'POST'
    });
    if (response.status !== 200) {
        const body = await response.json();
        return body.data;
    }
};

export default function NewBuildModal({ isShowing, hideModal }) {
    const initialState = {
        commitHash: ''
    };
    const [state, setState] = useState(initialState);
    function handleInputChange(fieldId, fieldValue) {
        setState({...state, [fieldId]: fieldValue});
    }

    function handleSubmitClick(event) {
        event.preventDefault();
        callBackendAPI(state.commitHash)
            .then(res => {
                if (res && res.status === 500) {
                    alert(res.data);
                }
                hideModal();
            })
            .catch(err => {
                console.log('NewBuildModal: catch in callBackendAPI: ', err);
            })
    }
    

    const modal = isShowing && 
        (<div className="NewBuildModal NewBuildModal_background">
            <form className="NewBuildModal-Form Page_font_yandex" onSubmit={handleSubmitClick} method="post">
                <div className="font_size_xl">New build</div>
                <label className="font_size_s">Enter the commit hash which you want to build:</label>
                <Input id='commitHash' placeholder={'Commit hash'} isRequired={true} hasDeleteIcon={true} onChange={handleInputChange} />
                <div className="Form-Item_align_adaptive">
                    <button type="submit" className="Button Button_color_primary Form-Button_gap_s Button_size_m font_size_s">Run build</button>
                    <button type="button" onClick={hideModal} className="Button Button_color_secondary Button_size_m font_size_s">Cancel</button>
                </div>
            </form>
        </div>);
    return modal;
}
