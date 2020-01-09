import React, { useEffect, useState } from "react";
import ProjectItem from "../project-item/ProjectItem";
import { getAllProjects } from "../../services/ProjectService";

const ProjectList = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    (async () => {
      const projectsFromAPI = await getAllProjects();
      setProjects(projectsFromAPI);
    })();
  }, []);

  const projectsList = projects.length
    ? projects.map(project => (
        <ProjectItem key={project.id} name={project.name} id={project.name} />
      ))
    : "Loading projects...";

  return <ul>{projectsList}</ul>;
};

export default ProjectList;
