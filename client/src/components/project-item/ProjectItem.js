import React, { useState } from "react";
import { deleteProject } from "../../services/ProjectService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { editProjectName } from "../../services/ProjectService";
import "./ProjectItem.css";

const ProjectItem = ({ name, id }) => {
  const [newName, setNewName] = useState(name);

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
          <span className="action" onClick={() => editProjectName(id, newName)}>
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
