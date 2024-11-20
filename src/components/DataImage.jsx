import React, { useEffect, useState } from "react";

const FullPageImage = () => {
  const [imageData, setImageData] = useState(null);
  useEffect(() => {
    const fetchImageData = async () => {
      try {
        const response = await fetch("https://ik.imagekit.io/dev24");
        const data = await response.json();
        setImageData(data);
      } catch (error) {
        console.error("Error fetching image data:", error);
      }
    };

    fetchImageData();
  }, []);

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gray-100">
      {imageData?.Image ? (
        <img
          src={`https://ik.imagekit.io/dev24/${imageData.Image}`}
          alt="Fetched from API"
          className="h-full w-full object-cover"
        />
      ) : (
        <p className="text-gray-700 text-lg">Loading image...</p>
      )}
    </div>
  );
};

export default FullPageImage;
