import React from 'react';
import Loader from 'react-loader-spinner';

export default function LoaderAnimation() {
    return (
        <Loader style={{height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}} 
            type="Oval"
            color="#FF9A00"
            height={50}
            width={50}
            //timeout={3000} //3 secs  
        />
    );
}