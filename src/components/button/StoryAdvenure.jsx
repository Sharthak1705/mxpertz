import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ScienceFictionStory = () => {
  const [storyData, setStoryData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStoryData = async () => {
      try {
        const response = await axios.get('https://mxpertztestapi.onrender.com/api/sciencefiction');
        setStoryData(response.data.Storyadvenure);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchStoryData();
  }, []);

  if (loading) return <div className="text-center text-xl p-4">Loading...</div>;
  if (error) return <div className="text-red-500 p-4">Error: {error}</div>;

  return (
    <div className="container mx-auto p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center">{storyData.Storytitle}</h1>
      
      {storyData.content.map((section, index) => (
        <div key={section._id} className="mb-8 bg-white rounded-lg shadow-md p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            {section.Storyimage.map((image, imgIndex) => (
              <img 
                key={imgIndex} 
                src={`https://mxpertztestapi.onrender.com/uploads/${image}`} 
                alt={`Story illustration ${imgIndex + 1}`} 
                className="w-full h-64 object-cover rounded-lg"
              />
            ))}
          </div>
          
          {section.Paragraph.map((paragraph, paraIndex) => (
            <p key={paraIndex} className="text-gray-700 mb-4">
              {paragraph}
            </p>
          ))}
        </div>
      ))}
    </div>
  );
};
export default ScienceFictionStory;