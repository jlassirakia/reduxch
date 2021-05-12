import React, { useState } from "react";
import { addTodo } from "../redux/Action";
import { v1 as uuid } from "uuid";
import { useDispatch } from "react-redux";
import "./AddTasks.css";
function AddTask() {
  let [description, setDescription] = useState("");

  let dispatch = useDispatch();
  return (
    <div className="row">
      <label>
        {" "}
        <b>Add Task :</b>
      </label>
      <input
        type="text"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      />

      <button
        className="addd"
        onClick={() => {
          dispatch(
            addTodo({
              id: uuid(),
              description: description,
            })
          );

          setDescription("");
        }}
      >
        Add
      </button>
    </div>
  );
}

export default AddTask;
