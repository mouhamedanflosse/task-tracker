import Task from "./Task";
function Tasks({ tasks, ondelete, reminder }) {
  return (
    <>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          ondelete={ondelete}
          reminder={reminder}
        />
      ))}
    </>
  );
}
export default Tasks;
