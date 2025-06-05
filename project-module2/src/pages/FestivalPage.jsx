import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const FestivalPage = () => {
  const [festivals, setFestivals] = useState([]);

  const getAllFestivals = () => {
    axios
      .get("http://localhost:5005/festivals")
      .then((res) => setFestivals(res.data))

      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getAllFestivals();
  }, []);

  return (
    <div>
      {festivals.map((oneFest) => {
        return (
          <div>
            <img src={oneFest.image} alt={oneFest.name} />
            <h1>{oneFest.name}</h1>
            <h2>{oneFest.genre}</h2>
            <h3>{oneFest.location}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default FestivalPage;
