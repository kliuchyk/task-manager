import React from "react";
import Header from "../header/Header";
import "./App.css";
import AddProjectForm from "../add-project-form/AddProjectForm";
import ProjectList from "../project-list/ProjectList";

const App = () => {
  return (
    <div className="App">
      <Header />
      <AddProjectForm />
      <ProjectList />
    </div>
  );
};

export default App;
