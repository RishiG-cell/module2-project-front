import axios from "axios";
import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const FestiDetailsPage = ({ countries, festivals, setFestivals, loggedIn }) => {
  const { festId } = useParams();
  const nav = useNavigate();

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

  const handleDelete = (id) => {
    axios
      .delete(`${API_URL}/festivals/${id}`)
      .then((res) => {
        const filteredFest = festivals.filter((oneFest) => {
          if (oneFest.id !== id) {
            return true;
          }
        });
        setFestivals(filteredFest);
        nav("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="detail-container">
      {loggedIn ? (
        <div
          className="deleteBtn"
          onClick={() => {
            handleDelete(oneFest.id);
          }}
        >
          🗑️
        </div>
      ) : (
        <div></div>
      )}
      <div className="editBtn">
        {loggedIn ? <Link to={`/edit-fest/${oneFest.id}`}>♻️</Link> : <></>}
      </div>
      <div
        className="detail"
        style={{
          backgroundImage: `url(${filteredFlag?.flag})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
        }}
      >
        <div className="detail-text">
          <h1>{oneFest.date}</h1>
          <h1>{oneFest.name}</h1>

          <img src={oneFest.image} alt={oneFest.name} />

          <h2>{oneFest.genre}</h2>
          <h3>{oneFest.description}</h3>
          <h3>{oneFest.location}</h3>
          <Link to={`/tickets/${oneFest.id}`}>
            <button>TICKETS</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FestiDetailsPage;
