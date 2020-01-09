import React from "react";
import Header from "../header/Header";
import "./App.css";
import AddProjectForm from "../add-project-form/AddProjectForm";
import ProjectList from "../project-list/ProjectList";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash, faEdit, faListAlt } from "@fortawesome/free-solid-svg-icons";

library.add(faTrash, faEdit, faListAlt);

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
