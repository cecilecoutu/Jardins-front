import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

function BestPlaces(props) {
  const API_URL =
    "https://les-jardins-remarquables-de-france-ccilnins-projects.vercel.app/jardins";

  const [jardins, setJardins] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    axios
      .get(`${API_URL}/search?q=${query}`)
      .then((res) => {
        setJardins(res.data);
      })
      .catch((e) => console.log(e));
  }, [query]);

  return (
    <div>
      <h1>All Gardens</h1>
      <input
        type="text"
        name="search"
        placeholder="Filter gardens"
        onChange={(e) => getSuggestedQuery(e.target.value)}
      ></input>
    </div>
  );
}

export default BestPlaces;
