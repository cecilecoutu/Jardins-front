import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

function RegionBourgogne(props) {
  const API_URL =
    "https://les-jardins-remarquables-de-france-ccilnins-projects.vercel.app/jardins";

  const [jardins, setJardins] = useState();

  useEffect(() => {
    axios
      .get(`${API_URL}`)
      .then((res) => {
        const Result = res.data;

        const resultfilter = Result.filter(
          (jardin) => jardin.fields?.region === "Bourgogne-Franche-Comté"
        );
        console.log(resultfilter);

        setJardins(resultfilter);
      })

      .catch((e) => console.log(e));
  }, []);

  if (!jardins) {
    return <div>Loading...</div>;
  }

  // Filtrer les jardins de la région Bourgogne
  const jardinsBourgogne = jardins.filter(
    (jardin) => jardin.fields.region === "Bourgogne-Franche-Comté"
  );

  return (
    <div style={styles.titleContainer}>
      <h1>Les jardins remarquables en région Bourgogne Franche-Comté</h1>
      <ul>
        {jardinsBourgogne.map((jardin) => (
          <Jardin key={jardin.id} jardin={jardin} />
        ))}
      </ul>
    </div>
  );
}
const styles = {
  titleContainer: {
    paddingTop: "8rem",
    width: "90%",
  },

  listContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },

  borderContainer: {
    width: "40%",
    margin: "1rem",
    marginBottom: "2rem",
    padding: "1rem",
    boxSizing: "content-box",
  },

  cardImage: {
    display: "flex",
    width: "100%",
    margin: "auto",
    justifyContent: "center",
    borderRadius: "0.5rem",
  },

  secondBorderContainer: {
    width: "40%",
    margin: "1rem",
    marginBottom: "1rem",
    padding: "1rem",
    boxSizing: "content-box",
  },

  textContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    textAlign: "left",
  },

  textResponsive: {
    fontSize: "16px", // Taille de base pour les écrans plus larges

    "@media (maxWidth: 768px)": {
      fontSize: "14px", // Taille pour les écrans plus petits que 768px
    },
  },
};

// Composant Jardin pour représenter chaque élément de la liste
const Jardin = ({ jardin }) => (
  <div>
    <div style={styles.listContainer}>
      <div style={styles.borderContainer}>
        <div style={styles.cardImage}>
          <img
            src={jardin.fields.image_url}
            alt={jardin.nom_du_jardin}
            style={styles.cardImage}
          ></img>
        </div>
      </div>
      <div style={styles.secondBorderContainer}>
        <div style={styles.textContainer}>
          <div style={styles.textResponsive}>
            <h2>{jardin.fields.nom_du_jardin}</h2>
            <p>Région: {jardin.fields.region}</p>
            <p>Département: {jardin.fields.departement}</p>
            <p>Adresse complète: {jardin.fields.adresse_complete}</p>
            <p>Année d'obtention du label: {jardin.fields.annee_d_obtention}</p>
            <p>Type de jardin: {jardin.fields.types}</p>

            <Link to={`/jardins/${jardin.id}`}>Détails</Link>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default RegionBourgogne;
