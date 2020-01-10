import React, { useState } from "react";
import Header from "../header/Header";
import "./App.css";
import AddProjectModal from "../add-project-modal/AddProjectModal";
import ProjectList from "../project-list/ProjectList";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faTrash,
  faEdit,
  faListAlt,
  faPlus
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(faTrash, faEdit, faListAlt, faPlus);

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const showModal = () => setIsOpen(true);
  const hideModal = () => setIsOpen(false);

  return (
    <div className="App">
      <Header />
      <button className="open-modal-btn" onClick={showModal}>
        <FontAwesomeIcon className="faicons" icon="plus" />
        Add TODO List
      </button>
      <AddProjectModal isOpen={isOpen} hideModal={hideModal} />
      <ProjectList />
    </div>
  );
};

export default App;
