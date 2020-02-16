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
        checked={completed}
        className="task-complete-input"
        onChange={handleChange}
      />
      <input
        type="text"
        name="name"
        value={name}
        className="task-name-input"
        onChange={handleChange}
      />
      <div className="task-controls">
        <span className="priority-actions">
          <FontAwesomeIcon className="faicons" icon="caret-up" onClick={() => console.log('UP')} />
          <FontAwesomeIcon className="faicons" icon="caret-down" onClick={() => console.log('DOWN')} />
        </span>
        <FontAwesomeIcon className="faicons edit" icon="edit" />
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
