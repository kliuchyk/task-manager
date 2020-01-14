import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./TaskItem.css";
import { Context } from "../../context";
import { deleteTaskService } from "../../services/TaskService";

const TaskItem = ({ details, projectId }) => {
  const { name, id } = details;
  const { deleteTask } = useContext(Context);

  const handleDelete = () => {
    const taskId = id;

    deleteTaskService(taskId)
      .then(res => res.json())
      .then(task => deleteTask(projectId, task.id));
  };

  return (
    <div className="task-container">
      <input type="checkbox" />
      <span>{name}</span>
      <div className="task-controls">
        <FontAwesomeIcon className="faicons" icon="angle-up" />
        <FontAwesomeIcon className="faicons" icon="edit" />
        <FontAwesomeIcon
          className="faicons"
          icon="trash"
          onClick={handleDelete}
        />
      </div>
    </div>
  );
};

export default TaskItem;
