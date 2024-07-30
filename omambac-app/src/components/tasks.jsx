import React, { useState } from "react";
import Task from "./task";
import Search from "./searchfilter";
import "./tsk.css";

const Tasks = () => {
  const [tasks, setTask] = useState([
    {
      description: "Plan",
      assignee: "Alice",
      status: "pending",
      deadline: "August 5, 2024",
    },
    {
      description: "Login",
      assignee: "Bob",
      status: "completed",
      deadline: "August 7, 2024",
    },
    {
      description: "Setup",
      assignee: "Charlie",
      status: "pending",
      deadline: "August 10, 2024",
    },
    {
      description: "Design",
      assignee: "Diana",
      status: "completed",
      deadline: "August 12, 2024",
    },
    {
      description: "Test",
      assignee: "Eve",
      status: "pending",
      deadline: "August 15, 2024",
    },
    {
      description: "Market",
      assignee: "Frank",
      status: "pending",
      deadline: "August 17, 2024",
    },
    {
      description: "Optimize",
      assignee: "Grace",
      status: "completed",
      deadline: "August 20, 2024",
    },
    {
      description: "Integrate",
      assignee: "Heidi",
      status: "pending",
      deadline: "August 22, 2024",
    },
    {
      description: "Launch",
      assignee: "Ivan",
      status: "pending",
      deadline: "August 25, 2024",
    },
    {
      description: "Review",
      assignee: "Judy",
      status: "completed",
      deadline: "August 28, 2024",
    },
  ]);
  const [filteredTasks, sFilteredT] = useState(tasks);

  const Status = (index) => {
    const newTsks = [...tasks];
    newTsks[index].status =
      newTsks[index].status === "pending" ? "completed" : "pending";
    setTask(newTsks);
    sFilteredT(newTsks);
  };
  return (
    <div>
      <h2>Task List</h2>
      <Search tasks={tasks} setFilteredTasks={sFilteredT} />
      <ul>
        <li className="taskheader">
          <span>No.</span>
          <span>Description</span>
          <span>Assignee</span>
          <span>Deadline</span>
          <span>Status</span>
          <span>Action</span>
        </li>
        {filteredTasks.map((task, index) => (
          <Task key={index} index={index} task={task} Status={Status} />
        ))}
      </ul>
    </div>
  );
};
export default Tasks;
