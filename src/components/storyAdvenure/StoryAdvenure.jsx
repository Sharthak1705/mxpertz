import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import StoryCard from './StoryCard';

const StoryAdventure = () => {
  const { id } = useParams();

  const [story, setStory] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStory = async () => {
      try {
        const response = await fetch(`https://mxpertztestapi.onrender.com/api/sciencefiction/${id}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setStory(data);
        setLoading(false);
      } catch (error) {
        setError('Error fetching data: ' + error.message);
        setLoading(false);
      }
    };

    fetchStory();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="min-h-screen bg-[#0B1123] text-white">
      <div className="px-10 py-8 ml-10">
        {story?.Storyadvenure?.content && story.Storyadvenure.content.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {story.Storyadvenure.content
              .filter((content) => content.Storyimage && content.Paragraph)
              .map((content, index) => (
                <StoryCard key={content._id || index} 
                content={content} 
                story={story} />
              ))}
          </div>
        ) : (
          <p>No Story Adventure Available...</p>
        )}
      </div>
    </div>
  );
};

export default StoryAdventure;