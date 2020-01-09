const API = "http://localhost:4000/projects";

export const createProject = name => {
  fetch(API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=UTF-8"
    },
    body: JSON.stringify({
      name
    })
  })
    .then(res => res.text())
    .then(data => console.log(data));
};
