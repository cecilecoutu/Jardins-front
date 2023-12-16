import React from "react";
import Home from "../assets/home.webp";
import { Link } from "react-router-dom";
import Inspiration from "../assets/light-bulb-idea-svgrepo-com.svg";
import NewGarden from "../assets/tree-decidious-svgrepo-com.svg";

function Navbar(props) {
  const styles = {
    navContainer: {
      width: "100%",
      height: "2.5rem",
      position: "fixed",
      paddingTop: "1rem",
      paddingBottom: "1.2rem",
      top: "0",
      margin: "0 auto",
      display: "flex",
      justifyContent: "space-around",

      backgroundColor: "rgb(84, 138, 91)",
      backgroundSize: "cover",
    },
  };

  return (
    <nav style={styles.navContainer}>
      <Link to={"/"}>
        <img src={Home} alt="home" style={{ width: "1.5rem" }} />
        <br></br>
        <div style={{ color: "white", fontSize: "0.9rem" }}>Home</div>
      </Link>
      <Link to={"/inspiration-du-jour"}>
        <img src={Inspiration} alt="inspiration" style={{ width: "1.5rem" }} />
        <br></br>
        <div style={{ color: "white", fontSize: "0.9rem" }}>
          Inspiration du jour
        </div>
      </Link>
      <Link to={"/nouveau-jardin"}>
        <img
          src={NewGarden}
          alt="nouveau jardin à labelliser"
          style={{ width: "1.5rem" }}
        />
        <div style={{ color: "white", fontSize: "0.9rem" }}>
          Labelliser un nouveau jardin
        </div>
      </Link>
    </nav>
  );
}
export default Navbar;
