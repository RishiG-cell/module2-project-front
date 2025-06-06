import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const FestivalPage = ({ festivals, setFestivals }) => {
  return (
    <div className="festpage">
      {festivals.map((AllFests) => {
        return (
          <div className="festi-card" key={AllFests.id}>
            <h1>{AllFests.date}</h1>
            <h1>{AllFests.name}</h1>
            <Link to={`/festival/${AllFests.id}`}>
              <img src={AllFests.image} alt={AllFests.name} />
            </Link>
            <h2>{AllFests.genre}</h2>
            <h3>{AllFests.location}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default FestivalPage;
