import React from 'react';
import ProjectItem from '../project-item/ProjectItem';

import styled from 'styled-components';

import './ProjectList.css';

const NoProjectsTitle = styled.h1`
  text-align: center;
  color: #4d648d;
`;

const ProjectList = ({ projects }) => {
  if (projects.length === 0) {
    return <NoProjectsTitle>There are no projects yet.</NoProjectsTitle>;
  }

  const projectsList = projects.length
    ? projects.map(project => (
        <ProjectItem
          key={project.id}
          name={project.name}
          id={project.id}
          tasks={project.tasks}
        />
      ))
    : 'Loading projects...';

  return <ul className="projects-list">{projectsList}</ul>;
};

export default ProjectList;
