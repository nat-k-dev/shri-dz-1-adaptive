import React from 'react';
import Loader from 'react-loader-spinner';
import './LoaderAnimation.scss';

export default function LoaderAnimation() {
    return (
        <Loader className='LoaderAnimation' 
            type="Oval"
            color="#FF9A00"
            height={50}
            width={50}
            //timeout={3000} //3 secs  
        />
    );
}