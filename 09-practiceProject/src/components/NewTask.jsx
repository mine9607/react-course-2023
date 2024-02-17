import React, { useState } from "react";

export default function NewTask({ onAddTask }) {
  const [task, setTask] = useState("");

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleAddTask = () => {
    if (task.trim() === "") {
      return;
    }
    onAddTask(task);
    setTask("");
  };

  return (
    <div className="flex items-center gap-4">
      <input onChange={handleChange} value={task} type="text" className="w-64 px-2 py-1 rounded-sm bg-stone-200" />
      <button onClick={handleAddTask} className="text-stone-700 hover:text-stone-950">
        Add Task
      </button>
    </div>
  );
}
