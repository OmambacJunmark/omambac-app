import React from "react";
import "./tsk.css";

const Task = ({ task, index, Status }) => {
  return (
    <div className="item">
      <span>{index + 1}.</span>
      <span>{task.description}</span>
      <span>{task.assignee}</span>
      {task.status === "pending" && <span>{task.deadline}</span>}
      <span>{task.status}</span>

      <span>
        <button onClick={() => Status(index)}>Toggle Status</button>
      </span>
    </div>
  );
};
export default Task;
