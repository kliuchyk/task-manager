import React from "react";
import TaskItem from "../task-item/TaskItem";
import "./TaskList.css";

const TaskList = ({ tasks = [], projectId }) => {
  const taskList = tasks.length
    ? tasks.map(task => (
        <TaskItem key={task.id} details={task} projectId={projectId} />
      ))
    : "No tasks yet for this project.";

  return <ul className="task-list">{taskList}</ul>;
};

export default TaskList;
