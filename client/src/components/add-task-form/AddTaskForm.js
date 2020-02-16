import React, { useState, useContext } from "react";
import { Context } from "../../context";
import { addNewTaskService } from "../../services/TaskService";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./AddTaskForm.css";

const AddTaskForm = ({ projectId, tasks }) => {
  const [taskName, setTaskName] = useState("");
  const { addNewTask } = useContext(Context);

  const handleSubmit = e => {
    e.preventDefault();

    const priority = tasks.length ? tasks.length + 1 : 1;

    if (taskName !== "") {
      addNewTaskService(taskName, projectId, priority)
        .then(res => res.json())
        .then(newTask => addNewTask(newTask, projectId))
        .then(result => setTaskName(""));
    }
  };

  return (
    <form className="add-task-form" onSubmit={handleSubmit}>
      <FontAwesomeIcon className="faicons" icon="plus" />
      <input
        className="input-task-name"
        type="text"
        placeholder="Start typing here to create a task..."
        value={taskName}
        onChange={e => setTaskName(e.target.value)}
      />
      <button className="add-btn">Add Task</button>
    </form>
  );
};

export default AddTaskForm;
