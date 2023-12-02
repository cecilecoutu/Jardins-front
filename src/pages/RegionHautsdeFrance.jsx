import React, { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

function RegionHautsdeFrance(props) {
  const API_URL =
    "https://les-jardins-remarquables-de-france.vercel.app/jardins";

  const [jardins, setJardins] = useState([]);

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
      <h1>Les jardins remarquables en région Hauts-de-France</h1>
      <input
        type="text"
        name="search"
        placeholder="Filter jardins"
        onChange={(e) => getSuggestedQuery(e.target.value)}
      ></input>
      <ul>
        {jardins.map((jardins) => (
          <li key={jardins.recordid}>
            <h2>{jardins.nom_du_jardin}</h2>
            <p>Région: {jardins.region}</p>
            <p>Département: {jardins.departement}</p>
            <p>Année d'obtention du label: {jardins.annee_d_obtention}</p>
            <p>Type de jardin: {jardins.types}</p>
            <p>Description: {jardins.description}</p>
            <p></p>
            <p>Pour en savoir plus: {jardins.site_internet_et_autres_liens}</p>
            <Link to={`/jardins/${jardins.site_internet_et_autres_liens}`}>
              Pour en savoir plus
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RegionHautsdeFrance;
