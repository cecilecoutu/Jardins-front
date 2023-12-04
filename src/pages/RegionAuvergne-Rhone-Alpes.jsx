import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

function RegionAuvergneRhoneAlpes(props) {
  const API_URL =
    "https://les-jardins-remarquables-de-france.vercel.app/jardins";

  const [jardins, setJardins] = useState([]);
  const [regionFiltre, setRegionFiltre] = useState("Auvergne-Rhône-Alpes");

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

  // Filtrer les jardins de la région Auvergne
  const jardinsAuvergne = jardins.filter(
    (jardin) => jardin.fields.region === "Auvergne-Rhône-Alpes"
  );

  return (
    <div>
      <h1>Les jardins remarquales en région Auvergne Rhône-Alpes</h1>
      <ul>
        {jardinsAuvergne.map((jardin) => (
          <Jardin key={jardin.recordid} jardin={jardin} />
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

    <Link to={`${jardin.fields.site_internet_et_autres_liens}`}>
      Pour en savoir plus
    </Link>
  </li>
);
export default RegionAuvergneRhoneAlpes;
