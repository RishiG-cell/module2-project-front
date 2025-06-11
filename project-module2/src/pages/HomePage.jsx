import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HomePage = ({ festivals, setFestivals }) => {
  const [genre, setGenre] = useState([]);

  useEffect(() => {
    const arrayGenre = festivals.map((oneFest) => {
      return oneFest.genre;
    });
    const noDubGenre = [...new Set(arrayGenre)];
    setGenre(noDubGenre);
  }, []);

  return (
    <div className="homepage1">
      {genre.map((oneGenre, index) => {
        return (
          <div className="homepage-genre" key={index}>
            <Link to={`/genre/${oneGenre}`}>
              <h2>{oneGenre}</h2>
            </Link>
          </div>
        );
      })}
      <div className="frontpage">
        {festivals.map((AllFests) => {
          return (
            <div key={AllFests.id}>
              <Link to={`/festival/${AllFests.id}`}>
                <img src={AllFests.image} alt={AllFests.name} />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomePage;
