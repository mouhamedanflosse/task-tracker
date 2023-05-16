function Task({ task, ondelete, reminder }) {
  return (
    <div
      className={`task ${task.reminder ? "reminded" : ""}`}
      onDoubleClick={() => reminder(task.id)}
    >
      <div className="text">
        <h3>{task.text}</h3>
        <p>{task.time}</p>
      </div>
      <div className="delete" onClick={() => ondelete(task.id)}>
        &times;
      </div>
    </div>
  );
}
export default Task;
