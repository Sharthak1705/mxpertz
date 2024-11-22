import React from "react";
import { FaAngleDown } from "react-icons/fa";

const Navbar = () => {
  return (
    <header className="p-4 flex justify-between items-center">
      
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
        <span className="text-xl font-bold">BrainyLingo</span>
      </div>
      
    
      <nav className="hidden md:flex gap-6">
        <a href="#" className="hover:text-blue-400">Home</a>
        <a href="#" className="hover:text-blue-400">Leaderboard</a>
        <a href="#" className="hover:text-blue-400">Daily Quiz</a>
        <a href="#" className="flex items-center text-blue-500 hover:text-blue-400">
      <span className="mr-1">Games</span><FaAngleDown className=" mt-1 h-4 w-4" /></a>
      </nav>
      <button className="bg-blue-500 px-4 py-2 rounded-full hover:bg-blue-700">
        Sign Out
      </button>
    </header>
  );
};

export default Navbar;
