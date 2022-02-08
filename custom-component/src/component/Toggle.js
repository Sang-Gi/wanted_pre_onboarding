import React from "react";
import './Toggle.scss'

const Toggle = (props) => {
  const { isChecked, handleToggle } = props;
  
  return (
    <div className="toggle">
      <h2>Toggle</h2>
      <input 
        className={`toggleCheckbox`}
        type="checkbox" 
        checked={isChecked} 
        onChange={handleToggle}
        id={`toggleInput`} // Label의 htmlfor 훅.
        /> 
      
      <label
        style={{ background: isChecked && '#495057' }}
        // 박스가 checked되면 bg색상 바꿔서 체크된 것을 확인.
        className={`toggleLabel`}
        htmlFor={`toggleInput`}
      >
        <span className={`toggleBall`}/>
      </label>
    </div>
  );
};

export default Toggle;
