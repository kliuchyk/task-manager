const API = "http://localhost:4000/tasks";

export const getAllTasksService = async () => {
  const response = await fetch(API).then(res => res.json());
  const tasks = await response;
  return tasks;
};
