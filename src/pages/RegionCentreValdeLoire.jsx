import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

function RegionCentreValdeLoire(props) {
  const API_URL =
    "https://les-jardins-remarquables-de-france.vercel.app/jardins";

  const [jardins, setJardins] = useState([]);

  const [regionFiltre, setRegionFiltre] = useState("Centre-Val de Loire");

  useEffect(() => {
    axios
      .get(`${API_URL}?region=${regionFiltre}`)
      .then((res) => {
        console.log(res.data);
        setJardins(res.data);
      })

      .catch((e) => console.log(e));
  }, [regionFiltre]);

  if (!jardins) {
    return <div>Loading...</div>;
  }

  // Filtrer les jardins de la région Centre-Val de Loire
  const jardinsCentreValdeLoire = jardins.filter(
    (jardin) => jardin.fields.region === "Centre-Val de Loire"
  );

  return (
    <div>
      <h1>Les jardins remarquales en région Centre Val de Loire</h1>
      <ul>
        {jardinsCentreValdeLoire.map((jardin) => (
          <Jardin key={jardin.id} jardin={jardin} />
        ))}
      </ul>
    </div>
  );
}

// Composant Jardin pour représenter chaque élément de la liste
const Jardin = ({ jardin }) => (
  <li>
    <h2>{jardin.fields.nom_du_jardin}</h2>
    <p>Région: {jardin.fields.region}</p>
    <p>Département: {jardin.fields.departement}</p>
    <p>Année d'obtention du label: {jardin.fields.annee_d_obtention}</p>
    <p>Type de jardin: {jardin.fields.types}</p>
    <p>Description: {jardin.fields.description}</p>
    {jardin.fields.site_internet_et_autres_liens}

    {/* {JSON.parse(
      jardin.fields.site_internet_et_autres_liens.map((site) => (
        <a href={site}>{site}</a>
      ))
    )} */}
  </li>
);

export default RegionCentreValdeLoire;
