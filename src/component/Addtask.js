import { useState } from "react";
function Addtask({ addTsak }) {
  const [text, setText] = useState("");
  const [time, setTime] = useState("");
  const [reminder, setReminder] = useState(false);
  function onsubmit(e) {
    e.preventDefault();
    if (!text) {
      return alert("please write a valid task");
    }
    addTsak({ text, time, reminder });
    setText("");
    setTime("");
    setReminder(false);
  }
  return (
    <form action="post" onSubmit={onsubmit}>
      <div className="input-control">
        <label>Task</label>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="input-control">
        <label>Day & time</label>
        <input
          type="text"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
      </div>
      <div className="input-control">
        <label>reminder</label>
        <input
          type="checkbox"
          checked={reminder}
          onChange={(e) => setReminder(e.target.checked)}
        />
      </div>
      <input type="submit" value="Add task" />
    </form>
  );
}
export default Addtask;
