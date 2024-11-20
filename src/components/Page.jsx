import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom'; 

const ScienceFictionStories = () => {
  const [stories, setStories] = useState([]);
  const [activeFilter, setActiveFilter] = useState('all');

  useEffect(() => {
    const fetchStories = async () => {
      try {
        const response = await fetch('https://mxpertztestapi.onrender.com/api/sciencefiction');
        const data = await response.json();
        setStories(data);
      } catch (error) {
        console.error('Error fetching stories:', error);
      }
    };
    fetchStories();
  }, []);

  const filterButtons = [
    { id: 'new', label: 'New', color: 'bg-blue-500' },
    { id: 'in-progress', label: 'In Progress', color: 'bg-yellow-500' },
    { id: 'completed', label: 'Completed', color: 'bg-green-500' },
  ];

  const filterStories = (story) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'new' && story.status === 'new') return true;
    if (activeFilter === 'in-progress' && story.status === 'in-progress') return true;
    if (activeFilter === 'completed' && story.status === 'completed') return true;
    return false;
  };

  return (
    <div className="min-h-screen bg-[#0B1123] text-white">
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
      <main className="px-6 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Science Fiction Stories</h1>

        <div className="flex justify-center gap-4 mb-8">
          {filterButtons.map((button) => (
            <button
              key={button.id}
              className={`px-6 py-2 rounded-full ${button.color} hover:opacity-90 transition-opacity
                ${activeFilter === button.id ? 'ring-2 ring-white' : ''}`}
              onClick={() => setActiveFilter(button.id)}
            >
              {button.label}
            </button>
          ))}
          <button
            className="px-6 py-2 rounded-full bg-purple-600 hover:opacity-90"
            onClick={() => setActiveFilter('all')}
          >
            Clear All
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stories.filter(filterStories).map((story, index) => (
            <div key={index} className="relative group bg-gradient-to-b from-purple-900/50 to-purple-900/30 border-2 border-purple-500/30 rounded-xl overflow-hidden hover:border-purple-500/60 transition-all duration-300">
              <div className="aspect-square overflow-hidden">
                <Link to={`/story/${story.id}`}> 
                  <img
                    src={`https://ik.imagekit.io/dev24/${story.Storyadvenure?.content[0]?.Storyimage[0]}`}
                    alt={story.Storyadvenure?.Storytitle}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    onError={(e) => {
                      e.target.src = "https://ik.imagekit.io/dev24/$%7Bdata?.Image%7D";
                    }}
                  />
                </Link>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2 text-center">
                  {story.Storyadvenure?.Storytitle || 'The Galactic Time Travelers'}
                </h3>
                <div className="flex justify-center">
                  <span className="inline-block px-20 py-2 rounded-full bg-blue-500 text-sm">
                    New
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-between items-center mt-8">
          <button className="flex items-center gap-2 text-purple-400 hover:text-purple-300">
            <ChevronLeft size={20} />
            Previous
          </button>
          <button className="flex items-center gap-2 text-purple-400 hover:text-purple-300">
            Next
            <ChevronRight size={20} />
          </button>
        </div>
      </main>
    </div>
  );
};

export default ScienceFictionStories;