import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="flex bg-slate-700 justify-between text-white py-4">
        <div className="logo mx-8">
          <span>iTask</span>
        </div>
        <ul className=" flex gap-8 mx-8">
          <li className="cursor-pointer hover:font-bold transition-all">
            Home
          </li>
          <li className="cursor-pointer hover:font-bold transition-all duration-100">
            Your Tasks
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
