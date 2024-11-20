import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const StoryDetails = () => {
  const { id } = useParams();
  const [story, setStory] = useState(null);

  useEffect(() => {
    const fetchStoryDetail = async () => {
      try {
        const response = await fetch(`https://mxpertztestapi.onrender.com/api/sciencefiction/${id}`);
        const data = await response.json();
        setStory(data);
      } catch (error) {
        console.error('Error fetching story details:', error);
      }
    };
    fetchStoryDetail();
  }, [id]);

  if (!story) return <div>Loading...</div>;

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
        <h1 className="text-4xl font-bold text-center mb-8">{story.Storyadvenure?.content}</h1>
        <div className="grid grid-cols-1 gap-8">
          {story.Storyadvenure?.content.map((item) => (
            <div key={item._id} className="bg-purple-900 p-4 rounded-xl">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {item.Storyimage.map((image, index) => (
                  <img
                    key={index}
                    src={`https://mxpertztestapi.onrender.com/api/sciencefiction${image}`}
                    alt={`Story Image ${index + 1}`}
                    className="w-full h-auto object-cover rounded-lg"
                  />
                ))}
              </div>
              
              <div className="mt-4">
                {item.Paragraph.map((paragraph, index) => (
                  <p key={index}
                   src={`https://mxpertztestapi.onrender.com/api/sciencefiction${paragraph}`}
                   className="text-lg mb-2">{paragraph}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default StoryDetails;