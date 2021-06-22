import React, { useState } from "react";

import Button from "./Button";
import "./AddTask.scss";

const AddTask = (props) => {
  const { handleTaskAddition } = props;

  const [inputData, setInputData] = useState("");
  const [fieldValid, setfieldValid] = useState(false);

  const handleInPutChange = (e) => {
    setInputData(e.target.value);
  };

  const handleAddTaskClick = () => {
    if (inputData.length === 0) {
      setfieldValid(true);
    } else {
      handleTaskAddition(inputData);
      setInputData("");
      setfieldValid(false);
    }

  };

  return (
    <>
      <div className="add-task-container">
        <input
          onChange={handleInPutChange}
          className="add-task-input"
          type="text"
          value={inputData}
        />
        <div className="add-task-button-container">
          <Button onclick={handleAddTaskClick}>Adicionar</Button>
        </div>
      </div>
      {(fieldValid) ? <div> o campo não pode ser vazio!</div> : ""  }
    </>
  );
};

export default AddTask;
