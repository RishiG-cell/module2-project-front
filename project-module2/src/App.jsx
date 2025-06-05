import { useState } from "react";

import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NavBar from "./components/NavBar";
import FestivalPage from "./pages/FestivalPage";

function App() {
  return (
    <>
      <NavBar />
      <div>Hello World !</div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/festival/:festid" element={<FestivalPage />} />
      </Routes>
    </>
  );
}

export default App;
