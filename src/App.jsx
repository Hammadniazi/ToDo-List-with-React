import React from "react";
import { useState } from "react";
import Navbar from "./components/Navbar";
import { v4 as uuidv4 } from "uuid";

import "./App.css";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const handleEdit = () => {};
  const handleDelete = (e, id) => {
    console.log(`The Id is ${id} `);
  };
  const handleAdd = () => {
    setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }]);
    setTodo("");
    console.log(todos);
  };
  const handleChange = (e) => {
    setTodo(e.target.value);
  };
  const handleCheckBox = (e) => {
    let id = e.target.name;
    console.log(`The id is ${id}`);
    let index = todos.findIndex((item) => {
      return item.id === id;
    });
    console.log(index);
    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
    console.log(newTodos, todo);
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto bg-violet-100 my-5 rounded-md p-5 min-h-[80vh] ">
        <div className="addTodo my-5">
          <h2 className="todos text-lg font-bold ">Add a Todo</h2>
          <input
            onChange={handleChange}
            value={todo}
            type="text"
            className="border-1 rounded-md px-3 py-1 w-1/2"
          />
          <button
            onClick={handleAdd}
            className="bg-violet-800 hover:bg-violet-950 rounded-md px-2 py-1 text-white font-bold mx-6"
          >
            Save
          </button>
        </div>
        <h2 className="text-xl font-bold">Your ToDos</h2>
        <div className="todos">
          {todos.length === 0 && <div className="m-5">No Todos to Display</div>}
          {todos.map((item) => {
            return (
              <div
                key={item.id}
                className="todos flex w-1/2 justify-between my-3"
              >
                <input
                  name={item.id}
                  onChange={handleCheckBox}
                  type="checkbox"
                  value={item.isCompleted}
                  id=""
                />
                <div className={item.isCompleted ? "line-through" : ""}>
                  {item.todo}
                </div>
                <div className="buttons">
                  <button
                    onClick={handleEdit}
                    className="bg-violet-800 hover:bg-violet-950 rounded-md px-2 py-1 text-white font-bold mx-1"
                  >
                    Edit
                  </button>
                  <button
                    onClick={(e) => {
                      handleDelete(e, item.id);
                    }}
                    className="bg-violet-800 hover:bg-violet-950 rounded-md px-2 py-1 text-white font-bold mx-1"
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
