import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function GardenDetails() {
  const API_URL =
    "https://les-jardins-remarquables-de-france-ccilnins-projects.vercel.app/jardins";
  const { gardenId } = useParams();
  const navigate = useNavigate();

  const [gardenDetails, setGardenDetails] = useState();
  const styles = {
    Détails: {
      color: "rgb(84, 138, 91)",
      fontSize: "10rem",
    },

    loading: {
      margin: "6rem",
      fontSize: "1.5rem",
      color: "rgb(84, 138, 91)",
    },
    titleContainer: {
      paddingTop: "8rem",
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

  const fetchGardenDetails = async () => {
    try {
      const response = await axios.get(
        `https://les-jardins-remarquables-de-france-ccilnins-projects.vercel.app/jardins/${gardenId}`
      );

      console.log("Garden Details:", response.data);

      setGardenDetails(response.data);
    } catch (error) {
      console.error("Error fetching garden details:", error);
    }
  };
  useEffect(() => {
    fetchGardenDetails();
  }, []);

  if (!gardenDetails) {
    return <div style={styles.loading}>Loading...</div>;
  }

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
              <p>
                Année d'obtention du label: {jardin.fields.annee_d_obtention}
              </p>
              <p>Type de jardin: {jardin.fields.types}</p>

              <div style={styles.Détails}>
                <Link to={`/jardins/${jardin.id}`}>Détails</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      <div style={styles.listContainer}>
        <div style={styles.borderContainer}>
          <div style={styles.cardImage}></div>

          <img
            src={gardenDetails.fields.image_url}
            alt={gardenDetails.fields.nom_du_jardin}
            style={styles.cardImage}
          />
        </div>

        <div style={styles.secondBorderContainer}>
          <div style={styles.textContainer}>
            <div style={styles.textResponsive}></div>

            <h2>{gardenDetails.fields.nom_du_jardin}</h2>
            <p>Commune: {gardenDetails.fields.commune}</p>
            <p>Description: {gardenDetails.fields.description}</p>

            <p>Adresse complète: {gardenDetails.fields.adresse_complete}</p>
            <p>
              Adresse de l'entrée au public:{" "}
              {gardenDetails.fields.adresse_de_l_entree_du_public}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GardenDetails;
