import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./TaskItem.css";

const TaskItem = ({ details }) => {
  const { name } = details;
  return (
    <div className="task-container">
      <input type="checkbox" />
      <span>{name}</span>
      <div className="task-controls">
        <FontAwesomeIcon className="faicons" icon="plus" />
        <FontAwesomeIcon className="faicons" icon="plus" />
        <FontAwesomeIcon className="faicons" icon="plus" />
      </div>
    </div>
  );
};

export default TaskItem;
