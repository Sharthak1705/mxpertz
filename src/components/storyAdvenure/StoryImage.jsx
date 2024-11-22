import React from 'react';

const StoryImage = ({ imageUrl, altText }) => {
  return (
    <div className="aspect-square overflow-hidden">
      <img
        src={imageUrl}
        alt={altText}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        onError={(e) => {
          e.target.src = "/api/placeholder/400/400"; 
        }}
      />
      
    </div>
  );
};

export default StoryImage;
