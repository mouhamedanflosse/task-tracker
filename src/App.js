import { useState } from "react";
import "./App.css";
import Header from "./component/Header";
import Tasks from "./component/Tasks";
import Addtask from "./component/Addtask";
function App() {
  const [addForm, setAddForm] = useState(false);
  const [tasks, settasks] = useState([
    {
      id: 1,
      text: "finsh 50% of ToDo list",
      time: "11:00 AM",
      reminder: false,
    },
    {
      id: 2,
      text: "finsh 70% of ToDo list",
      time: "14:00 AM",
      reminder: false,
    },
    {
      id: 3,
      text: "finsh 100% of ToDo list",
      time: "17:00 AM",
      reminder: false,
    },
  ]);
  function ondelete(id) {
    settasks(tasks.filter((task) => task.id !== id));
  }
  function addTsak(task) {
    const id = Math.floor(Math.random() * 1000000);
    settasks([...tasks, { id, ...task }]);
    updatelS();
  }
  function updatelS() {
    tasks.map((task) =>
      window.localStorage.setItem(task.id, JSON.stringify(task))
    );
  }
  function reminder(id) {
    settasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  }
  function add() {
    setAddForm(!addForm);
  }
  return (
    <div className="container">
      <Header add={add} />
      {addForm && <Addtask addTsak={addTsak} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} ondelete={ondelete} reminder={reminder} />
      ) : (
        "there's NO Tasks to show"
      )}
    </div>
  );
}

export default App;
