import React from 'react';
import StoryImage from './StoryImage';

const StoryCard = ({ content, story }) => {
  
  return (
    <div className="bg-gradient-to-b from-purple-900/50 to-purple-900/30 border-2 border-purple-500/30 rounded-lg overflow-hidden shadow-md flex flex-col">
      {content?.Storyimage?.slice(0, 1).map((image, i) => (
        <div key={i} className="flex flex-col items-center p-4">
          <StoryImage
            imageUrl={`https://ik.imagekit.io/dev24/${image}?tr=w-400,h-300,fo-auto`}
            altText={story.Storyadvenure?.Storytitle || 'Science Fiction Story'}
            className="w-full h-48 object-cover rounded-lg"
          />
          {content?.Paragraph?.slice(0, 1).map((paragraph, j) => (
            <p key={j} className="mt-4 text-lg text-gray-300">{paragraph}</p>
          ))}
        </div>
      ))}

      
      {content?.Storyimage?.slice(1, 2).length > 0 && content?.Paragraph?.slice(1, 2).length > 0 && (
        <div className="flex flex-col items-center p-4">
          {content?.Storyimage?.slice(1, 2).map((image, i) => (
            <StoryImage
              key={i}
              imageUrl={`https://ik.imagekit.io/dev24/${image}`}
              altText={story.Storyadvenure?.Storytitle || 'Science Fiction Story'}
              className="w-full h-48 object-cover rounded-lg"
            />
          ))}
          {content?.Paragraph?.slice(1, 2).map((paragraph, j) => (
            <p key={j} className="mt-4 text-lg text-gray-300">{paragraph}</p>
          ))}
        </div>
      )}
    </div>
  );
};

export default StoryCard;
