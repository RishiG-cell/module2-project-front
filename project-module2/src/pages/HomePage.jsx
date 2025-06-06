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

  console.log(genre);
  return (
    <div className="homepage1">
      {genre.map((oneGenre, index) => {
        return (
          <div className="homepage-genre" key={index}>
            <h2>{oneGenre}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default HomePage;
