import React, { useState, useEffect, useRef } from "react";
import './css/ClickToEdit.scss';

const ClickToEdit = (props) => {
    // 실시간 동적으로 변경은 쉽다.
    // input에 변경이 생겨도 유지하다가 클릭시, 동시에 변경되어야함.
    const [name, setName] = useState('김코딩');
    const [age, setAge] = useState('20');
    // const [inputValue, setInputValue] = useState({name, age});

    const handleNameInput = (e) => {
        setName(e.target.value);
        console.log(e.target.value);
    }

    const handleAgeInput = (e) => {
        setAge(e.target.value);
        console.log(e.target.value);
    }

    
    return (
        <div className='clicktoedit'>
            <h2>ClickToEdit</h2>
            <div className='container'>
                <label>이름</label>
                <input
                    type='text'
                    className='editInput'
                    value={name}
                    onChange={handleNameInput} />
            </div>
            <div className='container'>
                <label>나이</label>
                <input
                    type='text'
                    className='editInput'
                    value={age}
                    onChange={handleAgeInput} />
            </div>
            <div className='container'>
                <span>이름 {name} 나이 {age}</span>
            </div>
        </div>
    );
};

export default ClickToEdit;
