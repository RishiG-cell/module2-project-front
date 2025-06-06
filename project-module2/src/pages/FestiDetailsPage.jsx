import React from "react";
import { Link, useParams } from "react-router-dom";

const FestiDetailsPage = ({ countries, festivals }) => {
  const { festId } = useParams();

  const oneFest = festivals.find((oneFestival) => {
    if (oneFestival.id === festId) {
      return true;
    }
  });
  const filteredFlag = countries.find((oneCountry) => {
    if (oneFest.location.includes(oneCountry.name)) {
      return true;
    }
  });
  console.log(filteredFlag);

  return (
    <div className="detail-container">
      <div
        className="detail"
        style={{
          backgroundImage: `url(${filteredFlag?.flag})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
        }}
      >
        <h1>{oneFest.date}</h1>
        <h1>{oneFest.name}</h1>

        <img src={oneFest.image} alt={oneFest.name} />

        <h2>{oneFest.genre}</h2>
        <h3>{oneFest.location}</h3>
      </div>
    </div>
  );
};

export default FestiDetailsPage;
