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
import TicketCartPage from "./pages/TicketCartPage";
import EditAmountPage from "./pages/EditAmountPage";
import NotFoundPage from "./pages/NotFoundPage";
import AddFestivalPage from "./pages/AddFestivalPage";

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
          path="/add-your-festi"
          element={
            <AddFestivalPage
              festivals={festivals}
              setFestivals={setFestivals}
            />
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
        <Route path="/ticketcart" element={<TicketCartPage />} />
        <Route
          path="/tickets/:festId"
          element={<Ticketspage festivals={festivals} />}
        />
        <Route
          path="/edit-ticket/:festId/:ticketId"
          element={<EditAmountPage />}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
