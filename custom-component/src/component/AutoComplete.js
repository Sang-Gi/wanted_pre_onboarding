import React from "react";
import './css/AutoComplete.scss'
import Rsa from 'react-search-autocomplete'

const AutoComplete = (props) => {
    // 자동 완성 예시
    const dict = [
        {
            id : 0,
            name: 'apple'
        },
        {
            id : 1,
            name: 'angular'
        },
        {
            id : 2,
            name: 'banana'
        },
        {
            id : 3,
            name: 'cotlin'
        },
        {
            id : 4,
            name: 'django'
        },
        {
            id : 5,
            name: 'express'
        },
        {
            id : 6,
            name: 'firebase'
        },
    ]

    return (
        <div className='autocomplete'>
            <h2>AutoComplete</h2>

        </div>
    );
};

export default AutoComplete;
