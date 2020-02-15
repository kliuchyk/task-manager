import React, { useContext } from 'react';
import { deleteTaskService, editTaskService } from '../../services/TaskService';
import { Context } from '../../context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './TaskItem.css';

const TaskItem = ({ details, projectId }) => {
  const { id, name, completed } = details;
  const { deleteTask, editTask } = useContext(Context);

  const handleChange = event => {
    const target = event.target;
    const name = target.name;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    const taskItem = {
      ...details,
      [name]: value,
    };

    console.log(taskItem);

    editTaskService(id, taskItem)
      .then(res => res.json())
      .then(task => editTask(projectId, id, task));
  };

  const handleDelete = () => {
    const taskId = id;

    deleteTaskService(taskId)
      .then(res => res.json())
      .then(task => deleteTask(projectId, task.id));
  };

  return (
    <div className="task-container">
      <input
        type="checkbox"
        name="completed"
        value={completed}
        onChange={handleChange}
      />
      <input
        type="text"
        name="name"
        value={name}
        onChange={handleChange}
      />
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
