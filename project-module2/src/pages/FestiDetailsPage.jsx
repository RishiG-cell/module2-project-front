import React from "react";
import { useParams } from "react-router-dom";

const FestiDetailsPage = () => {
  const { festId } = useParams();
  return <div>FestiDetailsPage</div>;
};

export default FestiDetailsPage;
