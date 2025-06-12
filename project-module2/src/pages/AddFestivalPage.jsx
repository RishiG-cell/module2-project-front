import axios from "axios";
import React, { use, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AddFestivalPage = ({
  festivals,
  setFestivals,
  username,
  setUsername,
  password,
  setPassword,
  error,
  handleLogin,
  handleLogout,
  loggedIn,
}) => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [genre, setGenre] = useState("");
  const [image, setImage] = useState(null);
  const [price, SetPrice] = useState("");
  const nav = useNavigate();

  const handleSubmit = async (e) => {
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
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "IronhackProjects");
    data.append("cloud_name", "dgtp5s2en");
    const response = await axios.post(
      "https://api.cloudinary.com/v1_1/dgtp5s2en/image/upload",
      data
    );

    NewFesti.image = response.data.url;
    const data2 = await axios.post(`${API_URL}/festivals`, NewFesti);

    setFestivals([...festivals, data2.data]);
    nav("/festival");
  };

  return (
    <div className="container-form">
      {!loggedIn ? (
        <div className="login-field">
          <h2>Login</h2>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button onClick={handleLogin}>Login</button>
        </div>
      ) : (
        <div>
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
                type="file"
                name="image"
                onChange={(e) => setImage(e.target.files[0])}
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
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
    </div>
  );
};

export default AddFestivalPage;
