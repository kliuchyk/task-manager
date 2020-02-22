const express = require("express");
const bodyParser = require("body-parser");
const db = require("./db/projectQueries");
const dbTasks = require("./db/taskQueries");
const cors = require("cors");

const app = express();

const PORT = process.env.PORT || 80;
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
app.post("/tasks/", dbTasks.createTask);
app.put("/tasks/:id", dbTasks.updateTask);
app.delete("/tasks/:id", dbTasks.deleteTask);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}.`);
});
