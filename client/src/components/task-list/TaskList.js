import React from "react";
import TaskItem from "../task-item/TaskItem";

import styled from 'styled-components';

const NoTaskInfo = styled.p`
  font-size: 14px;
  color: #999;
  padding: 7px 0;
  background-color: #ccc;
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
`;

const TaskList = ({ tasks = [], projectId }) => {
  const taskList = tasks.length
    ? tasks.map(task => (
        <TaskItem key={task.id} details={task} projectId={projectId} />
      ))
    : <NoTaskInfo>No tasks</NoTaskInfo>;

  return <ul className="task-list">{taskList}</ul>;
};

export default TaskList;
