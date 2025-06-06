import React from "react";
import { Link, useParams } from "react-router-dom";

const GenreList = ({ festivals }) => {
  const { genreList } = useParams();

  const filteredGenre = festivals.filter((oneFestival) => {
    if (oneFestival.genre === genreList) {
      return true;
    }
  });

  return (
    <div className="festpage">
      {filteredGenre.map((fest) => {
        return (
          <div className="festi-card" key={fest.id}>
            <h1>{fest.date}</h1>
            <h1>{fest.name}</h1>
            <Link to={`/festival/${fest.id}`}>
              <img src={fest.image} alt={fest.name} />
            </Link>
            <h2>{fest.genre}</h2>
            <h3>{fest.location}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default GenreList;
