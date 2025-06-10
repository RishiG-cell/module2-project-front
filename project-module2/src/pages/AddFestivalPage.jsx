import axios from "axios";
import React, { use, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AddFestivalPage = ({ festivals, setFestivals }) => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [genre, setGenre] = useState("");
  const [image, setImage] = useState("");
  const [price, SetPrice] = useState("");
  const nav = useNavigate();

  const handleSubmit = (e) => {
    console.log("here");
    e.preventDefault();
    const NewFesti = {
      name,
      location,
      date,
      description,
      genre,
      image,
      price,
    };
    axios
      .post("http://localhost:5005/festivals", NewFesti)
      .then((res) => {
        setFestivals([...festivals, res.data]);
        nav("/festival");
      })

      .catch((err) => console.log(err));
  };

  return (
    <div className="add-fest">
      <form onSubmit={handleSubmit}>
        <label>Your Festival name ! :</label>
        <input
          type="text"
          name="name"
          value={name}
          placeholder="Festi-val"
          onChange={(e) => setName(e.target.value)}
        />
        <label>Location :</label>

        <input
          type="text"
          name="location"
          value={location}
          placeholder="Rotterdam, Netherlands"
          onChange={(e) => setLocation(e.target.value)}
        />
        <label>Date : </label>

        <input
          type="text"
          name="date"
          value={date}
          placeholder="dd-mm-yyyy"
          onChange={(e) => setDate(e.target.value)}
        />
        <label>Descrition :</label>

        <input
          type="text"
          name="description"
          value={description}
          placeholder="Dress to impress"
          onChange={(e) => setDescription(e.target.value)}
        />
        <label>Genre : </label>

        <input
          type="text"
          name="genre"
          value={genre}
          placeholder="Urban"
          onChange={(e) => setGenre(e.target.value)}
        />
        <label>Image : </label>

        <input
          type="text"
          name="image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <label>Price per ticket :</label>

        <input
          type="number"
          name="price"
          value={price}
          placeholder="00"
          onChange={(e) => SetPrice(e.target.value)}
        />

        <button>Submit</button>
      </form>
    </div>
  );
};

export default AddFestivalPage;
