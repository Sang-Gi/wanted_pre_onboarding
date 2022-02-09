import React from "react";
import './css/Modal.scss'
import RModal from 'react-modal'

const Modal = (props) => {
  const { isOpen, isClose } = props;
  
  const handleClickisClose = () => {
    isClose();
  }
  return (
    <RModal 
      isOpen = { isOpen } // Modal은 인라인으로 css
      style={{
        overlay: {
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(189, 189, 189, 0.75)",
        },
        content: {
          width: '280px',
          height: '120px',
          borderRadius: '50px',
          color: 'white',
          backgroundColor: '#495057',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%,-50%)',
        }
      }}>
      <div className='Rmodal'>
        {/* 닫기 버튼 */}
        <button className='closeBtn' onClick={handleClickisClose}>X</button>
        <h2>HELLO CODESTATES!</h2>
      </div>
    </RModal>
  );
};

export default Modal;
