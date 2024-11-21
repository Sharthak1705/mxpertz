import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Brainquest = () => {
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
        setError("Error fetching data: " + error.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="min-h-screen min-w-screen bg-[#0B1123] text-white">
      <div className="p-4 ml-4">
        {data?.Brainquest && data.Brainquest.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {data.Brainquest.map((item, index) => (
              <div key={index} className="card p-4 bg-[#1C2432] rounded-lg shadow-lg">
                <h2 className="text-xl font-bold mb-3">{item.Question}</h2>
                <div className="my-4">
                  <strong>Options:</strong>
                  <ul className="list-disc pl-10">
                    {item.Option.map((option, idx) => (
                      <li key={idx}>{option}</li>
                    ))}
                  </ul>
                </div>
                <p>
                  <strong>Answer:</strong> {item.Answer}
                </p>

                {item.Storyimage && item.Storyimage.length > 0 && (
                  <img
                    src={`https://ik.imagekit.io/dev24/${story.Storyadvenure?.content[0]?.Storyimage[0]}`}
                    alt={item.Question}
                    className="w-full h-auto mt-2 rounded-md"
                  />
                )}
              </div>
            ))}
          </div>
        ) : (
          <p>No Brainquest data available.</p>
        )}
      </div>
    </div>
  );
};

export default Brainquest;
