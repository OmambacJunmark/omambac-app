import React, { useState } from "react";
import "./tsk.css";

const Search = ({ tasks, setFilteredTasks }) => {
  const [searchQuery, setQuery] = useState("");

  const handle = (e) => {
    const query = e.target.value.toLowerCase();
    setQuery(query);
    const filtered = tasks.filter(
      (task) =>
        task.description.toLowerCase().includes(query) ||
        task.assignee.toLowerCase().includes(query) ||
        task.status.toLowerCase().includes(query) ||
        task.deadline.includes(query)
    );
    setFilteredTasks(filtered);
  };
  return (
    <div className="searchfilter">
      <input type="text" value={searchQuery} onChange={handle} />
    </div>
  );
};

export default Search;
