import React from "react";
import ProjectItem from "../project-item/ProjectItem";

const ProjectList = ({ projects }) => {
  const projectsList = projects.length
    ? projects.map(project => (
        <ProjectItem key={project.id} name={project.name} id={project.id} />
      ))
    : "Loading projects...";

  return <ul>{projectsList}</ul>;
};

export default ProjectList;
