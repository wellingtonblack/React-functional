import React from "react";
import { useHistory, useParams } from "react-router-dom";

import Button from "./Button";

import "./TaskDetails.scss"

const TaskDetails = () => {
  const params = useParams()
  const history = useHistory()

  const handleBackButtonClick = () => {
    history.goBack()
  }

  console.log(params)
  return (
    <>
      <div className="back-button-container">
        <Button onclick={handleBackButtonClick}>Voltar</Button>
      </div>
      <div className="task-details-container">
        <h2>{params.taskTitle}</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
          ducimus officiis, consequuntur sapiente quod doloribus!
        </p>
      </div>
    </>
  );
};

export default TaskDetails;
