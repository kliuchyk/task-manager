import React, { useState } from "react";
import Header from "../header/Header";
import "./App.css";
import AddProjectModal from "../add-project-modal/AddProjectModal";
import ProjectList from "../project-list/ProjectList";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash, faEdit, faListAlt } from "@fortawesome/free-solid-svg-icons";

library.add(faTrash, faEdit, faListAlt);

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const showModal = () => setIsOpen(true);
  const hideModal = () => setIsOpen(false);

  return (
    <div className="App">
      <Header />
      <button onClick={showModal}>Add TODO List</button>
      <AddProjectModal isOpen={isOpen} hideModal={hideModal} />
      <ProjectList />
    </div>
  );
};

export default App;
