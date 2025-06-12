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
import EditFest from "./pages/EditFest";
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5005";

function App() {
  const [festivals, setFestivals] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const getAllFestivals = () => {
    axios
      .get(`${API_URL}/festivals`)
      .then((res) => setFestivals(res.data))

      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getAllFestivals();
  }, []);

  const [countries, setCountries] = useState([]);
  const getAllCountries = () => {
    axios
      .get(`${API_URL}/countries`)
      .then((res) => setCountries(res.data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getAllCountries();
  }, []);

  if (festivals.length === 0) {
    return <p>loading...</p>;
  }

  const handleLogin = () => {
    if (username === "admin" && password === "1234") {
      setLoggedIn(true);
      setError(" ");
    } else {
      setError("Get outtaaa here ! ");
    }
  };
  const handleLogout = () => {
    setLoggedIn(false);
    setUsername("");
    setPassword("");
    setError("");
  };

  return (
    <>
      <NavBar loggedIn={loggedIn} />
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
              loggedIn={loggedIn}
              username={username}
              setUsername={setUsername}
              password={password}
              setPassword={setPassword}
              error={error}
              handleLogin={handleLogin}
              handleLogout={handleLogout}
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
            <FestiDetailsPage
              countries={countries}
              festivals={festivals}
              setFestivals={setFestivals}
              loggedIn={loggedIn}
            />
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
        <Route
          path="/edit-fest/:festId"
          element={
            <EditFest festivals={festivals} setFestivals={setFestivals} />
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
