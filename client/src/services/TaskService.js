const API = "http://localhost:4000/tasks";

export const getAllTasksService = async () => {
  const response = await fetch(API).then(res => res.json());
  const tasks = await response;
  return tasks;
};

export const deleteTaskService = id => {
  return fetch(`${API}/${id}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json; charset=UTF-8" },
    body: JSON.stringify({ id })
  });
};
