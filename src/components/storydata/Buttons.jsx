import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { GiBrain } from "react-icons/gi";
import { IoMailUnread } from "react-icons/io5";
import Word from "../button/WordExplorer";
import StoryAdventure from "../button/StoryAdvenure";
import BrainQuest from "../button/Brain";

const ButtonsSection = () => {
  const [activeComponent, setActiveComponent] = useState("Word");
  return (
    <div className="bg-[#0B1123]  text-white">
      {activeComponent === "Word" && <Word />}
      {activeComponent === "StoryAdventure" && <StoryAdventure />}
      {activeComponent === "BrainQuest" && <BrainQuest />}

      <div className="flex justify-center space-x-6">
        <button
          className={`flex items-center space-x-2 px-8 py-3 rounded-md font-bold transition transform ${
            activeComponent === "Word"
              ? "bg-gradient-to-r from-blue-500 to-blue-600 text-black scale-105"
              : "bg-gradient-to-r from-blue-400 to-blue-500 text-black hover:scale-105"
          }`}
          onClick={() => setActiveComponent("Word")}
        >
          <FaSearch className="h-5 w-5" />
          <span>Word Explorer</span>
        </button>

        <button
          className={`flex items-center space-x-2 px-8 py-3 rounded-md font-bold transition transform ${
            activeComponent === "StoryAdventure"
              ? "bg-gradient-to-r from-purple-500 to-purple-600 text-black scale-105"
              : "bg-gradient-to-r from-purple-400 to-purple-500 text-black hover:scale-105"
          }`}
          onClick={() => setActiveComponent("StoryAdventure")}
        >
          <IoMailUnread className="h-6 w-6" />
          <span>Story Adventure</span>
        </button>

        <button
          className={`flex items-center space-x-2 px-8 py-3 rounded-md font-bold transition transform ${
            activeComponent === "BrainQuest"
              ? "bg-gradient-to-r from-pink-500 to-pink-600 text-black scale-105"
              : "bg-gradient-to-r from-pink-400 to-pink-500 text-black hover:scale-105"
          }`}
          onClick={() => setActiveComponent("BrainQuest")}
        >
          <GiBrain className="h-6 w-6" />
          <span>Brain Quest</span>
        </button>
      </div>
    </div>
  );
};

export default ButtonsSection;
