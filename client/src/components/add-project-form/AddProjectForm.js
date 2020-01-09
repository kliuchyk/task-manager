import React, { useState } from "react";
import { createProject } from "../../services/ProjectService";
import "./AddProjectForm.css";

const AddProjectForm = () => {
  const [projectName, setProjectName] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    createProject(projectName);
    setProjectName("");
  };

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <input
          className="form-input"
          type="text"
          value={projectName}
          placeholder="Name your next project..."
          onChange={e => setProjectName(e.target.value)}
        />
        <button className="submit-btn">Add new project</button>
      </form>
    </div>
  );
};

export default AddProjectForm;
