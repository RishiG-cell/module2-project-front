import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditFest = ({ festivals, setFestivals }) => {
  const { festId } = useParams();
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [genre, setGenre] = useState("");
  const [image, setImage] = useState(null);
  const [price, SetPrice] = useState("");
  const nav = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:5005/festivals/${festId}`)
      .then((res) => {
        console.log(res.data);
        setName(res.data.name);
        setLocation(res.data.location);
        setDate(res.data.date);
        setDescription(res.data.description);
        setGenre(res.data.genre);
        SetPrice(res.data.price);
      })
      .catch((err) => console.log(err));
  }, [festId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const editFesti = {
      name,
      location,
      date,
      description,
      genre,
      price,
    };

    if (image !== null) {
      console.log("hello with");
      const data = new FormData();
      data.append("file", image);
      data.append("upload_preset", "IronhackProjects");
      data.append("cloud_name", "dgtp5s2en");
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/dgtp5s2en/image/upload",
        data
      );
      editFesti.image = response.data.url;
      const data2 = await axios.patch(
        `${API_URL}/festivals/${festId}`,
        editFesti
      );
      const updateFest = festivals.map((oneFest) => {
        if (oneFest.id === festId) {
          return data2.data;
        } else {
          return oneFest;
        }
      });

      setFestivals(updateFest);
      nav("/festival");
    } else {
      console.log("hello without");
      const data2 = await axios.patch(
        `${API_URL}/festivals/${festId}`,
        editFesti
      );
      const updateFest = festivals.map((oneFest) => {
        if (oneFest.id === festId) {
          return data2.data;
        } else {
          return oneFest;
        }
      });
      setFestivals(updateFest);
      nav("/festival");
    }
  };
  return (
    <div>
      <div className="add-fest">
        <form onSubmit={handleSubmit}>
          <label>Your Festival name ! :</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label>Location :</label>

          <input
            type="text"
            name="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <label>Date : </label>

          <input
            type="text"
            name="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <label>Description :</label>

          <input
            type="text"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <label>Genre : </label>

          <input
            type="text"
            name="genre"
            value={genre}
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
            onChange={(e) => SetPrice(e.target.value)}
          />

          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default EditFest;
