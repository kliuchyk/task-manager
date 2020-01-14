import React, { useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Context } from "../../context";
import { addNewTaskService } from "../../services/TaskService";
import "./AddTaskForm.css";

const AddTaskForm = ({ projectId }) => {
  const [taskName, setTaskName] = useState("");
  const { addNewTask } = useContext(Context);

  const handleSubmit = e => {
    e.preventDefault();
    addNewTaskService(taskName, projectId)
      .then(res => res.json())
      .then(newTask => addNewTask(newTask, projectId))
      .then(result => setTaskName(""));
  };

  return (
    <form className="add-task-form" onSubmit={handleSubmit}>
      <FontAwesomeIcon className="faicons" icon="plus" />
      <input
        className="input-task-name"
        type="text"
        value={taskName}
        onChange={e => setTaskName(e.target.value)}
      />
      <button className="add-btn">Add Task</button>
    </form>
  );
};

export default AddTaskForm;
