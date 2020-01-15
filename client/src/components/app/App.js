import React, { useState, useEffect } from "react";
import Header from "../header/Header";
import AddProjectModal from "../add-project-modal/AddProjectModal";
import ProjectList from "../project-list/ProjectList";
import { Context } from "../../context";
import { getAllProjectsService } from "../../services/ProjectService";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faTrash,
  faEdit,
  faListAlt,
  faPlus,
  faAngleUp
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./App.css";

library.add(faTrash, faEdit, faListAlt, faPlus, faAngleUp);

const App = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    (async () => {
      const projectsFromAPI = await getAllProjectsService();
      setProjects(projectsFromAPI);
    })();
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  const showModal = () => setIsOpen(true);
  const hideModal = () => setIsOpen(false);

  const addNewProject = newProject => {
    setProjects([...projects, newProject]);
  };

  const editProject = updatedProject => {
    setProjects(
      projects.map(project => {
        if (project.id === updatedProject.id) {
          return {
            ...project,
            name: updatedProject.name
          };
        }
        return project;
      })
    );
  };

  const deleteProject = id => {
    setProjects(projects.filter(project => project.id !== id));
  };

  const addNewTask = (newTask, projectId) => {
    setProjects(
      projects.map(project => {
        if (project.id === projectId) {
          if (project.tasks) {
            return {
              ...project,
              tasks: [...project.tasks, newTask]
            };
          } else {
            return {
              ...project,
              tasks: [newTask]
            };
          }
        }

        return project;
      })
    );
  };

  const deleteTask = (projId, taskId) => {
    setProjects(
      projects.map(project => {
        if (project.id === projId) {
          return {
            ...project,
            tasks: project.tasks.filter(task => task.id !== taskId)
          };
        }
        return project;
      })
    );
  };

  return (
    <Context.Provider
      value={{
        addNewProject,
        editProject,
        deleteProject,
        deleteTask,
        addNewTask
      }}
    >
      <div className="App">
        <Header />
        <button className="open-modal-btn" onClick={showModal}>
          <FontAwesomeIcon className="faicons" icon="plus" />
          Add TODO List
        </button>
        <AddProjectModal isOpen={isOpen} hideModal={hideModal} />
        <ProjectList projects={projects} />
      </div>
    </Context.Provider>
  );
};

export default App;
