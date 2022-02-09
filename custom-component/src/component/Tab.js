import React, { useState } from "react";
import './css/Tab.scss'

const Tab = (props) => {
  const [index, setIndex] = useState('ONE');

  const handleClick = (index) => {
    setIndex(index);
    // console.log(index);
  }
  return (
    <div className="tab">
      <h2>Tab</h2>
      <div className='tabMenu'>
        <div onClick={() => {handleClick('ONE')}} className='tabBox'>Tab1</div>
        <div onClick={() => {handleClick('TWO')}} className='tabBox'>Tab2</div>
        <div onClick={() => {handleClick('THREE')}} className='tabBox'>Tab3</div>
      </div>
      <div className='tabContent'>Tab menu {index}</div>
    </div>
  );
};

export default Tab;
