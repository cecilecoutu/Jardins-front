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
      top: "0",
      display: "flex",
      justifyContent: "center",
      alignItems: "space-between",

      background: "rgb(30, 79, 36)",
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
