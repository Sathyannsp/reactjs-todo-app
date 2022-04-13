import { useState } from "react";
import "./Content.css";

const Content = () => {
  const [task, setTask] = useState("");
  const [allTasks, setAllTasks] = useState([]);

  const handleAllTasks = (todo) => {
    if (todo) {
      setAllTasks([todo, ...allTasks]);
      setTask("");
    }
  };

  const handleDelete = (index) => {
    const updatedTasks = [...allTasks];
    updatedTasks.splice(index, 1);
    setAllTasks(updatedTasks);
  };

  return (
    <div>
      <div className="content">
        <input
          className="add-task"
          type="text"
          placeholder="Add Task..."
          onChange={(e) => setTask(e.target.value)}
          value={task}
        />
        <button className="submit" onClick={() => handleAllTasks(task)}>
          Add
        </button>
      </div>

      {allTasks.map((item, index) => (
        <div className="list" key={index}>
          <ul className="list-item">{item}</ul>
          <button
            className="submitList wrong"
            onClick={() => handleDelete(index)}
          >
            ✖
          </button>
        </div>
      ))}
    </div>
  );
};

export default Content;
