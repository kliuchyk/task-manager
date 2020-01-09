const Pool = require("pg").Pool;
const pool = new Pool({
  user: "me",
  host: "localhost",
  database: "api",
  password: "password",
  port: 5432
});

const getProjects = (request, response) => {
  pool.query("SELECT * FROM projects ORDER BY id ASC", (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const getProjectById = (request, response) => {
  const id = parseInt(request.params.id);

  pool.query("SELECT * FROM projects WHERE id = $1", [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const createProject = (request, response) => {
  const { name } = request.body;
  console.log(request.body);

  pool.query(
    "INSERT INTO projects (name) VALUES ($1) RETURNING id",
    [name],
    (error, result) => {
      if (error) {
        throw error;
      }
      response.status(201).send(`Project added with ID: ${result.rows[0].id}`);
    }
  );
};

const updateProject = (request, response) => {
  const id = parseInt(request.params.id);
  const { name, email } = request.body;

  pool.query(
    "UPDATE projects SET name = $1, email = $2 WHERE id = $3",
    [name, email, id],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).send(`User modified with ID: ${id}`);
    }
  );
};

const deleteProject = (request, response) => {
  const id = parseInt(request.params.id);

  pool.query("DELETE FROM projects WHERE id = $1", [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).send(`User deleted with ID: ${id}`);
  });
};

module.exports = {
  getProjects,
  getProjectById,
  createProject,
  updateProject,
  deleteProject
};
