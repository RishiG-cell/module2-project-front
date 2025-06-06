import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const FestivalPage = ({ festivals, setFestivals }) => {
  return (
    <div>
      {festivals.map((oneFest) => {
        return (
          <div className="festi-card" key={oneFest.id}>
            <h1>{oneFest.date}</h1>
            <h1>{oneFest.name}</h1>
            <Link to={`/festival/${oneFest.id}`}>
              <img src={oneFest.image} alt={oneFest.name} />
            </Link>
            <h2>{oneFest.genre}</h2>
            <h3>{oneFest.location}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default FestivalPage;
