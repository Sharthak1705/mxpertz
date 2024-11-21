import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const WordExplorer = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const apiUrl = `https://mxpertztestapi.onrender.com/api/sciencefiction/${id}/`;
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network was not response ");
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="min-h-screen bg-[#0B1123] text-white">
      <div className="ml-9 p-5">
        {data?.Wordexplore && data.Wordexplore.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-9">
            {data.Wordexplore.map((item, index) => (
              <div
                key={index}
                className="card bg-[#1C2432] rounded-lg shadow-lg overflow-hidden"
              >
                { item.Storyimage && item.Storyimage.length > 0 && (
                  <img
                    src={` https://ik.imagekit.io/dev24/${item.Storyimage[0]}`}
                    alt={item.Storytext || "Story Image "}
                    className="w-full h-64 object-cover rounded-t-lg"
                  />
                )}
                <div className="p-4">
                  <h2 className="text-xl font-bold mb-2">{item.Storytitle}</h2>
                  <p className="text-sm text-gray-300 mb-4">{item.Storyttext}</p>
                  <p className="mb-2">
                    <strong>Synonyms:</strong> {item.Synonyms}
                  </p>
                  <p className="mb-2">
                    <strong>Antonyms:</strong> {item.Antonyms}
                  </p>
                  <p>
                    <strong>Noun:</strong> {item.Noun}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p>No WordExplorer data available.</p>
        )}
      </div>
    </div>
  );
};

export default WordExplorer;
