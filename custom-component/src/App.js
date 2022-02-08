import React, { useState} from "react";
import "./App.css";
import Toggle from "./component/Toggle";
import Modal from "./component/Modal";

function App() {
  const [value, setValue] = useState(false);
  
  return (
    <div className="root">
      <p>This is App</p>
      <Toggle 
      isChecked={value}
      handleToggle={() => setValue(!value)}/>
      <Modal />
    </div>
  );
}

export default App;
