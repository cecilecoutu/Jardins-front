import React from "react";
import Home from "../assets/home.webp";
import { Link } from "react-router-dom";
import Inspiration from "../assets/light-bulb-idea-svgrepo-com.svg";

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

      backgroundColor: "rgb(30, 79, 36)",
      backgroundSize: "cover",
    },
  };

  return (
    <nav style={styles.navContainer}>
      <Link to={"/"}>
        <img src={Home} alt="home" style={{ width: "3rem" }} />
        <br></br>
        Home
      </Link>
      <Link to={"/inspiration-du-jour"}>
        <img src={Inspiration} alt="inspiration" style={{ width: "3rem" }} />
        <br></br>
        Inspiration du jour
      </Link>
    </nav>
  );
}
export default Navbar;
