import React from "react";
import ProjectItem from "../project-item/ProjectItem";
import "./ProjectList.css";

const ProjectList = ({ projects }) => {
  const projectsList = projects.length
    ? projects.map(project => (
        <ProjectItem key={project.id} name={project.name} id={project.id} tasks={project.tasks} />
      ))
    : "Loading projects...";

  return <ul className="projects-list">{projectsList}</ul>;
};

export default ProjectList;
