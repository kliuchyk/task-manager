const API = "http://localhost:4000/projects";

export const getAllProjectsService = async () => {
  const response = await fetch(API).then(res => res.json());
  const projects = await response;
  return projects;
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
