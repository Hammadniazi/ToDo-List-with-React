import React from "react";
import { useState } from "react";
import Navbar from "./components/Navbar";

import "./App.css";

function App() {
  const [todo, settodo] = useState("");
  const [todos, settodos] = useState([]);
  const handleEdit = () => {};
  const handleDelete = () => {};
  const handleAdd = () => {};

  return (
    <>
      <Navbar />
      <div className="container mx-auto bg-violet-100 my-5 rounded-md p-5 min-h-[80vh] ">
        <div className="addTodo my-5">
          <h2 className="todos text-lg font-bold ">Add a Todo</h2>
          <input type="text" className="border-1 rounded-md px-3 py-1 w-1/2" />
          <button
            onClick={handleAdd}
            className="bg-violet-800 hover:bg-violet-950 rounded-md px-2 py-1 text-white font-bold mx-6"
          >
            Save
          </button>
        </div>
        <h2 className="text-xl font-bold">Your ToDos</h2>
        <div className="todos">
          <div className="todos flex">
            <div className="text">{todo}</div>
            <div className="buttons">
              <button
                onClick={handleEdit}
                className="bg-violet-800 hover:bg-violet-950 rounded-md px-2 py-1 text-white font-bold mx-1"
              >
                Edit
              </button>
              <button
                onClick={handleDelete}
                className="bg-violet-800 hover:bg-violet-950 rounded-md px-2 py-1 text-white font-bold mx-1"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
