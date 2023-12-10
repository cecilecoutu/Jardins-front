import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

function RegionBourgogne(props) {
  const API_URL =
    "https://les-jardins-remarquables-de-france.vercel.app/jardins";

  const [jardins, setJardins] = useState([]);
  const [regionFiltre, setRegionFiltre] = useState("Bourgogne");

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

  // Filtrer les jardins de la région Bourgogne
  const jardinsBourgogne = jardins.filter(
    (jardin) => jardin.fields.region === "Bourgogne-Franche-Comté"
  );

  return (
    <div>
      <h1>Les jardins remarquales en région Bourgogne Franche-Comté</h1>
      <ul>
        {jardinsBourgogne.map((jardin) => (
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
    <img
      src={jardin.fields.image_url}
      style={{ width: "25%" }}
      alt={jardin.nom_du_jardin}
    ></img>
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

export default RegionBourgogne;