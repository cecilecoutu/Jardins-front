import React from "react";
import Home from "../assets/home.webp";
import { Link } from "react-router-dom";
import Inspiration from "../assets/light-bulb-idea-svgrepo-com.svg";
import NewGarden from "../assets/tree-decidious-svgrepo-com.svg";

function Navbar(props) {
  const styles = {
    navContainer: {
      width: "100%",
      height: "5rem",
      position: "fixed",
      paddingTop: "1.5rem",
      paddingBottom: "1.5rem",
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
        <img src={Home} alt="home" style={{ width: "4rem" }} />
        <br></br>
        <div style={{ color: "white" }}>Home</div>
      </Link>
      <Link to={"/inspiration-du-jour"}>
        <img src={Inspiration} alt="inspiration" style={{ width: "4rem" }} />
        <br></br>
        <div style={{ color: "white" }}>Inspiration du jour</div>
      </Link>
      <Link to={"/nouveau-jardin"}>
        <img
          src={NewGarden}
          alt="nouveau jardin à labelliser"
          style={{ width: "4rem" }}
        />
        <div style={{ color: "white" }}>Labelliser un nouveau jardin</div>
      </Link>
    </nav>
  );
}
export default Navbar;
