import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./AddTaskForm.css";

const AddTaskForm = () => {
  return (
    <form className="add-task-form">
      <FontAwesomeIcon className="faicons" icon="plus" />
      <input className="input-task-name" type="text" />
      <button className="add-btn">Add Task</button>
    </form>
  );
};

export default AddTaskForm;
