import "./App.css";

import ListTask from "./component/ListTask";

import AddTask from "./component/AddTask";

function App() {
  return (
    <div className="ap">
      <img src="/images/logo.jpg" alt="logo" />
      <h4 className="tt"> list of task </h4>

      <AddTask></AddTask>

      <br />

      <ListTask></ListTask>
    </div>
  );
}

export default App;
