const express = require("express");
const bodyParser = require("body-parser");
const db = require("./db/queries");
const dbTasks = require("./db/taskQueries");
const cors = require("cors");

const app = express();
const port = 4000;
const origin = "http://localhost:3000";

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(cors({ origin }));

app.get("/projects", db.getProjects);
app.get("/projects/:id", db.getProjectById);
app.post("/projects", db.createProject);
app.put("/projects/:id", db.updateProject);
app.delete("/projects/:id", db.deleteProject);

app.get("/tasks", dbTasks.getAllTasks);

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
