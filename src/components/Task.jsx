import React from "react";
import { CgClose, CgInfo } from "react-icons/cg";
import { useHistory } from "react-router-dom"

import "./Task.scss";

const Task = (props) => {
  const { task, handleTaskClick , handleTasklDeletion} = props;

  const history = useHistory();

  const handleTaskDetailsClick = () => {
    history.push(`/${task.title}`)
  }

  return (
    <div
      className={"task-container"}
      style={task.completed ? { borderLeft: "6px solid chartreuse" } : {}}
    >
      <div className={"task-title"} onClick={() => handleTaskClick(task.id)}>
        {task.title}
      </div>
      <div className={"buttons-container"}>
        <button className={"remove-task-button"}
          onClick={() => handleTasklDeletion(task.id)}
        >
          <CgClose/>
        </button>
        <button className={"see-task-detail-button"}
          onClick={handleTaskDetailsClick}
        >
          <CgInfo/>
        </button>
      </div>
    </div>
  );
  // return <div className={"task-container"}>{task.title}</div>;
};

export default Task;
