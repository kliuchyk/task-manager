import React from "react";
import { deleteProject } from "../../services/ProjectService";
import "./ProjectItem.css";

const ProjectItem = ({ name, id }) => {
  return (
    <div className="project">
      <header className="project-header">
        <span className="calendar-icon">icon</span>
        <h3 className="project-name">{name}</h3>
        <span className="actions">
          <span className="action">Edit</span>
          <span className="action" onClick={() => deleteProject(id)}>
            Delete
          </span>
        </span>
      </header>
    </div>
  );
};

export default ProjectItem;
