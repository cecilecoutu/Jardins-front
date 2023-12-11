import Navbar from "../components/Navbar";
import React, { useEffect, useState } from "react";
import axios from "axios";

function RandomGarden(props) {
  const API_URL =
    "https://les-jardins-remarquables-de-france.vercel.app/jardins";
  const [gardens, setGardens] = useState(null);

  const [loading, setLoading] = useState(true);
  const [randomGarden, setRandomGarden] = useState(null);

  useEffect(() => {
    axios
      .get(API_URL)
      .then((res) => {
        setGardens(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Erreur lors de la requête API :", error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (gardens && gardens.length > 0) {
      const randomIndex = Math.floor(Math.random() * gardens.length);
      setRandomGarden(gardens[randomIndex]);
    }
  }, [gardens]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>
        Inspiration du jour : découvrez une suggestion pour vos prochaines
        vacances !
      </h2>

      {randomGarden && <Jardin key={randomGarden.id} jardin={randomGarden} />}
    </div>
  );
}
const Jardin = ({ jardin }) => (
  <div>
    <p>Nom du jardin: {jardin.fields.nom_du_jardin}</p>
    <p>Région: {jardin.fields.region}</p>
    <p>Département: {jardin.fields.departement}</p>
    <p>Année d'obtention du label: {jardin.fields.annee_d_obtention}</p>
    <p>Type de jardin: {jardin.fields.types}</p>
    <p>Description: {jardin.fields.description}</p>
  </div>
);

export default RandomGarden;
