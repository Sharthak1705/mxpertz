import React from "react";

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
        <a href="#" className="hover:text-blue-400">Games</a>
      </nav>
  
      <button className="bg-blue-600 px-4 py-2 rounded-full hover:bg-blue-700">
        Sign Out
      </button>
    </header>
  );
};

export default Navbar;
