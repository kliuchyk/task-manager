import React from "react";
import TaskItem from "../task-item/TaskItem";
import "./TaskList.css";

const TaskList = ({ tasks }) => {
  const taskList = tasks.length
    ? tasks.map(task => <TaskItem key={task.id} details={task} />)
    : "Loading tasks...";

  return <ul className="task-list">{taskList}</ul>;
};

export default TaskList;
