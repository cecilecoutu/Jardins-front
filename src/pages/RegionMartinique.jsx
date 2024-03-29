import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import Localisation from "../assets/location-svgrepo-com (1).svg";
import Label from "../assets/label-svgrepo-com.svg";
import Type from "../assets/garden-svgrepo-com.svg";

function RegionMartinique(props) {
  const API_URL =
    "https://les-jardins-remarquables-de-france-ccilnins-projects.vercel.app/jardins";
  const [jardins, setJardins] = useState();

  useEffect(() => {
    axios
      .get(`${API_URL}`)
      .then((res) => {
        const Result = res.data;

        const resultfilter = Result.filter(
          (jardin) => jardin.fields?.region === "Martinique"
        );
        console.log(resultfilter);

        setJardins(resultfilter);
      })

      .catch((e) => console.log(e));
  }, []);

  if (!jardins) {
    return <div style={styles.loading}>Loading...</div>;
  }

  // Filtrer les jardins de la Martinique
  const jardinsMartinique = jardins.filter(
    (jardin) => jardin.fields.region === "Martinique"
  );

  return (
    <div style={styles.titleContainer}>
      <h1>Les jardins remarquables en région Martinique</h1>
      <ul>
        {jardinsMartinique.map((jardin) => (
          <Jardin key={jardin.id} jardin={jardin} />
        ))}
      </ul>
    </div>
  );
}
const styles = {
  loading: {
    margin: "6rem",
    fontSize: "1.5rem",
    color: "rgb(84, 138, 91)",
  },

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
            <div>
              <img
                src={Localisation}
                style={{
                  width: "1.5rem",
                  paddingRight: "1rem",
                }}
                alt="Localisation"
              />
              Région: {jardin.fields.region}
            </div>
            <div>
              <img
                src={Localisation}
                style={{
                  width: "1.5rem",
                  paddingRight: "1rem",
                  paddingTop: "1rem",
                }}
                alt="Localisation"
              />
              Département: {jardin.fields.departement}
            </div>
            <div>
              <img
                src={Label}
                style={{
                  width: "1.5rem",
                  paddingRight: "2rem",
                  paddingTop: "1rem",
                }}
              ></img>
              Année d'obtention du label: {jardin.fields.annee_d_obtention}
            </div>
            <div>
              <img
                src={Type}
                style={{ width: "1.5rem", paddingRight: "1rem" }}
              ></img>
              Type de jardin: {jardin.fields.types}
            </div>

            <div style={styles.Détails}>
              <Link
                to={`/jardins/${jardin.id}`}
                style={{ color: "lightGreen" }}
              >
                Détails
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default RegionMartinique;
