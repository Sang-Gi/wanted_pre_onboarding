import React, { useState } from "react";
import "./App.css";
import Toggle from "./component/Toggle";
import Modal from "./component/Modal";
import Tab from "./component/Tab"
import Tag from "./component/Tag"
// import AutoComplete from './component/AutoComplete';
import ClickToEdit from './component/ClickToEdit';

function App() {
  const [value, setValue] = useState(false);
  const [isOpen, setOpen] = useState(false);

  // 모달 열기
  const handleClickisOpen = () => {
    setOpen(true);
  };

  //모달 닫기
  const handleClickisClose = () => {
    setOpen(false);
  };
  
  return (
    <div className="root">
      <h1>원티드 프리온보딩 코스 선발과제</h1>
      <h3>개발자 정상기</h3>

      <Toggle 
      isChecked={value}
      handleToggle={() => setValue(!value)}/>

      <div className="modal">
        <h2>Modal</h2>
        <div onClick={handleClickisOpen} className="modalBox">Open Modal</div>
        <Modal isOpen={isOpen} isClose={handleClickisClose}/>
      </div>

      <Tab />

      <Tag />

      {/* <AutoComplete /> */}

      <ClickToEdit />
    </div>
  );
}

export default App;
