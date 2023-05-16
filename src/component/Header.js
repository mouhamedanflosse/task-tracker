function Header({ add }) {
  return (
    <div className="header">
      <h1>Task Tracker</h1>
      <button onClick={add}>Add</button>
    </div>
  );
}
export default Header;
