import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [taskText, setTaskText] = useState("");
  const [taskCategory, setTaskCategory] = useState("Code");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (taskText.trim() === "") return;

    const newTask = { text: taskText, category: taskCategory };
    onTaskFormSubmit(newTask);

    setTaskText("");
    setTaskCategory("Code");
  };

  return (
    <form className="new-task-form" onSubmit={handleFormSubmit}>
      <input
        type="text"
        placeholder="Enter task details"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
      />
      <select
        value={taskCategory}
        onChange={(e) => setTaskCategory(e.target.value)}
      >
        {categories
          .filter((category) => category !== "All")
          .map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
      </select>
      <button type="submit">Add Task</button>
    </form>
  );
}

export default NewTaskForm;
