import Navbar from "../components/Navbar";
import React, { useEffect, useState } from "react";
import GardenImage from "../assets/tree-decidious-svgrepo-com (1).svg";

function About(props) {
  const styles = {
    Tree: {
      justifyContent: "center",
      width: "5rem",
    },
    placesContainer: {
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "center",
    },
    cardContainer: {
      width: "80%",
      border: "1px solid rgb(193, 202, 211)",
      boxSizing: "content-box",
      borderRadius: "1rem",
    },
    cardText: {
      display: "flex",
      flexDirection: "column",
      width: "80%",
      margin: "auto",
      paddingLeft: "1rem",
      paddingRight: "1rem",
      justifyContent: "center",
    },
  };
  return (
    <div>
      <div>
        <img src={GardenImage} style={styles.Tree} alt="Garden" />
      </div>
      <div style={styles.placesContainer}>
        <div style={styles.cardContainer}>
          <div style={styles.cardText}>
            <h3>Les jardins remarquables de France, qu'est-ce que c'est ?</h3>
            <p>
              Mis en place en 2004, le label « Jardin remarquable » distingue
              des jardins et des parcs, présentant un intérêt culturel,
              esthétique, historique ou botanique, qu'ils soient publics ou
              privés. Ce label de qualité est attribué par le ministère de la
              Culture pour une durée de 5 ans renouvelable. Il donne lieu à des
              avantages divers et notamment à une signalisation routes et
              autoroutes, selon le même processus que les édifices protégés au
              titre des monuments historiques. NB : le modèle de données évolue
              à partir du 1er février 2023. Le code identifiant du jardin
              anciennement nommé "code id" est renommé "identifiant origine".
            </p>
            <div style={styles.Détails}>
              <a
                href={
                  "https://www.data.gouv.fr/fr/datasets/liste-des-jardins-remarquables/"
                }
                style={{ color: "lightGreen" }}
              >
                Source: data.gouv.fr
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
