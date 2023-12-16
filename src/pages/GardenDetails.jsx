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
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2> {gardenId}</h2>
      <div>{gardenDetails.fields.nom_du_jardin}</div>
      <img
        src={gardenDetails.fields.image_url}
        alt={gardenDetails.fields.nom_du_jardin}
      />
      <p>Description: {gardenDetails.fields.description}</p>

      <p>Adresse complète: {gardenDetails.fields.adresse_complete}</p>
      <p>
        Adresse de l'entrée au public:
        {gardenDetails.fields.adresse_de_l_entree_du_public}
      </p>
    </div>
  );
}

export default GardenDetails;
