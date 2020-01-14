import React, { useState, useContext } from "react";
import AddTaskForm from "../add-task-form/AddTaskForm";
import TaskList from "../task-list/TaskList";
import {
  deleteProjectService,
  editProjectService
} from "../../services/ProjectService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Context } from "../../context";
import "./ProjectItem.css";

const ProjectItem = ({ name, id, tasks }) => {
  const [newName, setNewName] = useState(name);
  const { editProject, deleteProject } = useContext(Context);

  const handleEdit = () => {
    editProjectService(id, newName)
      .then(res => res.json())
      .then(updatedProject => editProject(updatedProject));
  };

  const handleDelete = () => {
    deleteProjectService(id)
      .then(res => res.json())
      .then(project => deleteProject(project.id));
  };

  return (
    <div className="project">
      <header className="project-header">
        <span className="calendar-icon">
          <FontAwesomeIcon className="faicons" icon="list-alt" />
        </span>
        <h3 className="project-name">
          <input
            className="edit-input"
            type="text"
            value={newName}
            onChange={e => setNewName(e.target.value)}
          />
        </h3>
        <span className="actions">
          <span className="action" onClick={handleEdit}>
            <FontAwesomeIcon className="faicons" icon="edit" />
          </span>
          <span className="action" onClick={handleDelete}>
            <FontAwesomeIcon className="faicons" icon="trash" />
          </span>
        </span>
      </header>
      <AddTaskForm />
      <TaskList tasks={tasks} projectId={id} />
    </div>
  );
};

export default ProjectItem;
