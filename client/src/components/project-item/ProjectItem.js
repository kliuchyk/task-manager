import React from "react";
import { deleteProject } from "../../services/ProjectService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./ProjectItem.css";

const ProjectItem = ({ name, id }) => {
  return (
    <div className="project">
      <header className="project-header">
        <span className="calendar-icon">
          <FontAwesomeIcon className="faicons" icon="list-alt" />
        </span>
        <h3 className="project-name">{name}</h3>
        <span className="actions">
          <span className="action">
            <FontAwesomeIcon className="faicons" icon="edit" />
          </span>
          <span className="action" onClick={() => deleteProject(id)}>
            <FontAwesomeIcon className="faicons" icon="trash" />
          </span>
        </span>
      </header>
    </div>
  );
};

export default ProjectItem;
