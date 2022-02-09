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
      <ul className='tabMenu'>
        <li onClick={() => {handleClick('ONE')}} className='tabBox'>Tab1</li>
        <li onClick={() => {handleClick('TWO')}} className='tabBox'>Tab2</li>
        <li onClick={() => {handleClick('THREE')}} className='tabBox'>Tab3</li>
      </ul>
      <div className='tabContent'>Tab menu {index}</div>
    </div>
  );
};

export default Tab;
