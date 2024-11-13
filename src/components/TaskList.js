import Task from "./Task";

function TaskList({ tasks, onDeleteTask }) {
  return (
    <div>
      {tasks.map((task) => (
        <Task
          key={task.id}  // Use a unique key for each task
          id={task.id}  // Pass the id to Task component
          text={task.text}
          category={task.category}
          onDelete={onDeleteTask}
        />
      ))}
    </div>
  );
}

export default TaskList;
