const API = "http://localhost:4000/projects";

export const getAllProjectsService = async () => {
  const projectsResponse = fetch(API).then(res => res.json());
  const tasksResponse = fetch("http://localhost:4000/tasks").then(res =>
    res.json()
  );

  return Promise.all([projectsResponse, tasksResponse]).then(
    projectsWithTasks => {
      const [projects, tasks] = projectsWithTasks;

      return projects.map(project => {
        project.tasks = tasks.filter(task => task.project_id === project.id);
        return project;
      });
    }
  );
};

export const createProjectService = name => {
  return fetch(API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=UTF-8"
    },
    body: JSON.stringify({
      name
    })
  });
};

export const deleteProjectService = id => {
  return fetch(`${API}/${id}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json; charset=UTF-8" },
    body: JSON.stringify({ id })
  });
};

export const editProjectService = (id, name) => {
  return fetch(`${API}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json; charset=UTF-8" },
    body: JSON.stringify({ name })
  });
};
