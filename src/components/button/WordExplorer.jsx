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
          throw new Error("Network response was not ok");
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
      <main className=" ml-10 px-6 py-8">
        {data?.Wordexplore && data.Wordexplore.length > 0 ?(
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {data.Wordexplore.map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-b from-purple-900/50 to-purple-900/30 border-2 border-purple-500/30 rounded-lg overflow-hidden hover:border-purple-500/60 transition-all duration-300 flex flex-col shadow-md"
                style={{ minHeight: "350px" }}
              >
                <div className="h-48 overflow-hidden">
                  {item.Storyimage && item.Storyimage.length > 0 && (
                    <img
                      src={`https://ik.imagekit.io/dev24/${item.Storyimage[0]}?tr=w-400,h-300,fo-auto`}
                      alt={item.Storytext || "Story Image"}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
                <div className="p-4 flex flex-col justify-between flex-grow">
                  <h2 className="text-2xl font-bold mb-2">{item.Storytitle}</h2>
                  <p className="text-lg text-gray-300 mb-4">{item.Storyttext}</p>
                  <div className="text-lg space-y-2">
                    <p>
                      <strong>Synonyms:</strong> {item.Synonyms}
                    </p>
                    <p>
                      <strong>Antonyms:</strong> {item.Antonyms}
                    </p>
                    <p>
                      <strong>Noun:</strong> {item.Noun}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p> No WordExplorer data available.</p>
        )}
      </main>
    </div>
  );
};

export default WordExplorer;
