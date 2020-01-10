import React, { useState, useContext } from "react";
import { createProjectService } from "../../services/ProjectService";
import { Context } from "../../context";
import "./AddProjectModal.css";

const AddProjectForm = ({ isOpen, hideModal }) => {
  const [projectName, setProjectName] = useState("");
  const { addNewProject } = useContext(Context);

  const showHideClassName = isOpen
    ? "modal display-block"
    : "modal display-none";

  const handleSubmit = e => {
    e.preventDefault();

    createProjectService(projectName)
      .then(res => res.json())
      .then(data => addNewProject(data));

    setProjectName("");
    hideModal();
  };

  return (
    <div className={showHideClassName}>
      <form className="modal-form" onSubmit={handleSubmit}>
        <span className="modal-close-btn" onClick={hideModal}>
          +
        </span>
        <h2 className="modal-header">Add new project</h2>
        <input
          className="form-input"
          type="text"
          value={projectName}
          placeholder="Name your next project..."
          onChange={e => setProjectName(e.target.value)}
        />
        <div className="modal-actions">
          <button className="btn close-btn" onClick={hideModal}>
            Close
          </button>
          <button className="btn submit-btn">Add new project</button>
        </div>
      </form>
    </div>
  );
};

export default AddProjectForm;
