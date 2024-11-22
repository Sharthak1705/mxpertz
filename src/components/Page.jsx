import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; 
import Navbar from './Navbar/Navbar';
import Button from './Navbar/Button';

const ScienceFiction = () => {
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
    { id: 'New', label: 'New', color: 'bg-blue-500' },
    { id: 'In progress', label: 'In Progress', color: 'bg-yellow-500' },
    { id: 'Completed', label: 'Completed', color: 'bg-green-500' },
  ];

  const filterStories = (story) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'new' && story.status === 'new') return true;
    if (activeFilter === 'in-progress' && story.status === 'in-progress') return true;
    if (activeFilter === 'completed' && story.status === 'completed') return true;
    console.log(story)
  };
  return (
    <div className="min-h-screen bg-[#0B1123] text-white">
      <Navbar />
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
                <Link to={`/details/${story._id}`}> 
                  <img
                    src={`https://ik.imagekit.io/dev24/${story.Image[0]}`}
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
                  {story.Paragraph || 'The Galactic Time Travelers'}
                </h3>
                <div className="flex justify-center">
                  <span className="inline-block px-20 py-2 rounded-full bg-blue-500 text-sm">
                    {story.Status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
           <Button />
      </main>
    </div>
  );
};
export default ScienceFiction;