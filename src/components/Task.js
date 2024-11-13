import React from "react";

function Task({ id, text, category, onDelete }) {
  return (
    <div className="task">
      <p>{text}</p>
      <p>{category}</p>
      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
}

export default Task;
