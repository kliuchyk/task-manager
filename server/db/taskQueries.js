const dbConfig = require('./configs');

const Pool = require('pg').Pool;
const pool = new Pool({
  ...dbConfig
});

const getAllTasks = (request, response) => {
  pool.query('SELECT * FROM tasks ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const getTaskById = (request, response) => {
  const id = parseInt(request.params.id);

  pool.query('SELECT * FROM tasks WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const createTask = (request, response) => {
  const { name, project_id, priority } = request.body;

  pool.query(
    'INSERT INTO tasks (name, project_id, priority) VALUES ($1, $2, $3) RETURNING id',
    [name, project_id, priority],
    (error, result) => {
      if (error) {
        throw error;
      }
      response.status(201).send({ id: result.rows[0].id, name, priority });
    }
  );
};

const updateTask = (request, response) => {
  const id = parseInt(request.params.id);
  const { name, project_id, priority, completed } = request.body;

  if (priority) {
    console.log('with PRIORITY');
    // pool.query(
    //   `UPDATE tasks SET priority = CASE id
    //     WHEN 1 THEN 'one new value'
    //     WHEN 2 THEN 'a different new value'
    //   END
    //   WHERE id in (1,2,3,...)`
    // )
  } else {
    console.log('Regular edit');
    pool.query(
      'UPDATE tasks SET name = $1, completed = $2 WHERE id = $3',
      [name, completed, id],
      (error, results) => {
        if (error) {
          throw error;
        }
        response.status(200).send({ id, name, completed });
      }
    );
  }
};

const deleteTask = (request, response) => {
  const id = parseInt(request.params.id);

  pool.query('DELETE FROM tasks WHERE id = $1', [id], (error, results) => {
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
