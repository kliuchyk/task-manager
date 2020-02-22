const dbConfig = require('./configs');

const Pool = require("pg").Pool;
const pool = new Pool({
  ...dbConfig
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

  pool.query(
    "INSERT INTO projects (name) VALUES ($1) RETURNING id",
    [name],
    (error, result) => {
      if (error) {
        throw error;
      }
      response.status(201).send({ id: result.rows[0].id, name });
    }
  );
};

const updateProject = (request, response) => {
  const id = parseInt(request.params.id);
  const { name } = request.body;

  pool.query(
    "UPDATE projects SET name = $1 WHERE id = $2",
    [name, id],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).send({ id, name });
    }
  );
};

const deleteProject = (request, response) => {
  const id = parseInt(request.params.id);

  pool.query("DELETE FROM projects WHERE id = $1", [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).send({ id });
  });
};

module.exports = {
  getProjects,
  getProjectById,
  createProject,
  updateProject,
  deleteProject
};
