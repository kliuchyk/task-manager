const Pool = require("pg").Pool;
const pool = new Pool({
  user: "me",
  host: "localhost",
  database: "api",
  password: "password",
  port: 5432
});

const getAllTasks = (request, response) => {
  pool.query("SELECT * FROM tasks ORDER BY id ASC", (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const getTaskById = (request, response) => {
  const id = parseInt(request.params.id);

  pool.query("SELECT * FROM tasks WHERE id = $1", [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const createTask = (request, response) => {
  const { name, project_id } = request.body;

  pool.query(
    "INSERT INTO tasks (name, project_id) VALUES ($1, $2) RETURNING id",
    [name, project_id],
    (error, result) => {
      if (error) {
        throw error;
      }
      response.status(201).send({ id: result.rows[0].id, name });
    }
  );
};

const updateTask = (request, response) => {
  const id = parseInt(request.params.id);
  const { name } = request.body;

  pool.query(
    "UPDATE tasks SET name = $1 WHERE id = $2",
    [name, id],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).send({ id, name });
    }
  );
};

const deleteTask = (request, response) => {
  const id = parseInt(request.params.id);

  pool.query("DELETE FROM tasks WHERE id = $1", [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).send({ id });
  });
};

module.exports = {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask
};
