import { useEffect, useState } from "react";

import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NavBar from "./components/NavBar";
import FestivalPage from "./pages/FestivalPage";
import FestiDetailsPage from "./pages/FestiDetailsPage";
import axios from "axios";
import GenreList from "./pages/GenreList";
import Ticketspage from "./pages/Ticketspage";

function App() {
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

  const [countries, setCountries] = useState([]);
  const getAllCountries = () => {
    axios
      .get("http://localhost:5005/countries")
      .then((res) => setCountries(res.data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getAllCountries();
  }, []);

  return (
    <>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <HomePage festivals={festivals} setFestivals={setFestivals} />
          }
        />
        <Route
          path="/festival/"
          element={
            <FestivalPage festivals={festivals} setFestivals={setFestivals} />
          }
        />
        <Route
          path="/festival/:festId"
          element={
            <FestiDetailsPage countries={countries} festivals={festivals} />
          }
        />
        <Route
          path="/genre/:genreList"
          element={<GenreList festivals={festivals} />}
        />
        <Route path="/tickets" element={<Ticketspage />} />
      </Routes>
    </>
  );
}

export default App;
