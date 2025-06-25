import React from "react";
import Navbar from "./components/Navbar";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto">
        <div className="bg-red-600">Your ToDos List.</div>
      </div>
    </>
  );
}

export default App;
