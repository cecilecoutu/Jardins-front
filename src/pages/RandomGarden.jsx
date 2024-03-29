import Navbar from "../components/Navbar";
import React, { useEffect, useState } from "react";
import axios from "axios";
import GardenImage from "../assets/tree-decidious-svgrepo-com (1).svg";

function RandomGarden(props) {
  const API_URL =
    "https://les-jardins-remarquables-de-france-ccilnins-projects.vercel.app/jardins";
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
    return <div style={styles.loading}>Loading...</div>;
  }

  return (
    <div>
      <div>
        <img src={GardenImage} style={styles.Tree} alt="Garden" />
      </div>

      <div style={styles.titleContainer}>
        <h3>
          Inspiration du jour : découvrez une suggestion de visite pour vos
          prochaines vacances !
        </h3>
      </div>

      {randomGarden && <Jardin key={randomGarden.id} jardin={randomGarden} />}
    </div>
  );
}

const styles = {
  Tree: {
    paddingTop: "6rem",
    justifyContent: "center",
    width: "5rem",
  },

  loading: {
    margin: "6rem",
    fontSize: "1.5rem",
    color: "rgb(84, 138, 91)",
  },

  titleContainer: {
    paddingTop: "2rem",
    width: "90%",
  },

  listContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },

  borderContainer: {
    width: "35%",
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
    width: "35%",
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
            <p>Description: {jardin.fields.description}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default RandomGarden;
