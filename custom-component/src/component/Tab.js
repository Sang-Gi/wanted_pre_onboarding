import React, { useState } from "react";
import './css/Tab.scss'

const Tab = (props) => {
  const [index, setIndex] = useState(0);

  const tabDicts = [
    {
      idx: 1,
      title: 'Tab 1',
      content: 'Tab Menu ONE',
    },
    {
      idx: 2,
      title: 'Tab 2',
      content: 'Tab Menu TWO',
    },
    {
      idx: 3,
      title: 'Tab 3',
      content: 'Tab Menu THREE',
    },
  ]

  const handleClick = (index) => {
    setIndex(index);
    // console.log(index);
  }
  return (
    <div className="tab">
      <h2>Tab</h2>
      <ul className='tabMenu'>
        {/* <li onClick={() => {handleClick('ONE')}} className='tabBox'>Tab1</li>
        <li onClick={() => {handleClick('TWO')}} className='tabBox'>Tab2</li>
        <li onClick={() => {handleClick('THREE')}} className='tabBox'>Tab3</li> */}
        {tabDicts.map((tabDict, idx) => {
          return(
              <li
              className='tabBox'
              onClick={() => handleClick(idx)}
              key={tabDicts.idx}
              style={idx === index ? {backgroundColor:'#495057', color:'#fff'} : {backgroundColor: ''}}>
                {tabDict.title}
              </li>
            )
        })}
      </ul>
      <div className='tabContent'>{tabDicts[index].content}</div>
    </div>
  );
};

export default Tab;
