import React, { useState } from "react";

import Table from "react-bootstrap/Table";
import "./ListTask.css";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { delete_todo, searchToDo, update_ToDo } from "../redux/Action";

const ListTask = () => {
  const [editable, seteditable] = useState(false);
  const [description, setDescription] = useState("");

  let tasks = useSelector((state) => state.task);

  let dispatch = useDispatch();

  const handelChange = (e) => {
    let isDone = e.target.value === "terminé" ? true : false;
    console.log(isDone);
    dispatch(searchToDo(isDone));
  };

  return (
    <div>
      <div className="row">
        <label>
          {" "}
          <b>Search:</b>{" "}
        </label>
        <select onChange={handelChange} className="sel">
          <option selected disabled>
            Sélectionner
          </option>
          <option>terminé</option>
          <option>non terminé</option>
        </select>
      </div>
      {tasks.map((task) => {
        return (
          <div className="base" key={task.id}>
            <Table>
              <thead>
                <tr className="trr">
                  <th>#</th>
                  <th>identifiant </th>
                  <th>description</th>
                  <th>isdone</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>****</td>
                  <td>{task.id.length > 1 ? task.id[2] : task.id}</td>
                  <div classname="eedite">
                    {editable ? (
                      <input
                        type="text"
                        className="form-control"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                      />
                    ) : (
                      <td>{task.description}</td>
                    )}
                  </div>

                  <td>
                    <select>
                      <option>Sélectionner</option>
                      <option>terminé</option>
                      <option>non terminé</option>
                    </select>
                  </td>
                  <td>
                    <Button onClick={() => dispatch(delete_todo(task.id))}>
                      <b>Delete</b>
                    </Button>
                  </td>
                  <td>
                    <button
                      className="edit"
                      onClick={() => {
                        dispatch(
                          update_ToDo({
                            ...task,
                            description: description,
                          })
                        );
                        if (editable) {
                          setDescription(task.description);
                        }
                        seteditable(!editable);
                      }}
                    >
                      {editable ? "update" : "Edite"}
                    </button>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        );
      })}
    </div>
  );
};

export default ListTask;
