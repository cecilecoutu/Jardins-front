import React from "react";
import Home from "../assets/home.webp";
import { Link } from "react-router-dom";
import Inspiration from "../assets/light-bulb-idea-svgrepo-com.svg";
import About from "../assets/about-filled-svgrepo-com.svg";

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
      boxShadow: "0.2rem 0.2rem 0.2rem lightgreen",
    },
  };

  return (
    <nav style={styles.navContainer}>
      <Link to={"/"}>
        <img src={Home} alt="home" style={{ width: "1.5rem" }} />
        <br></br>
        <div style={{ color: "white", fontSize: "0.9rem" }}>Home</div>
      </Link>
      <Link to={"/about"}>
        <img src={About} alt="about" style={{ width: "1.5rem" }} />
        <div style={{ color: "white", fontSIze: "0.9rem" }}>About</div>
      </Link>
      <Link to={"/inspiration-du-jour"}>
        <img src={Inspiration} alt="inspiration" style={{ width: "1.5rem" }} />
        <br></br>
        <div style={{ color: "white", fontSize: "0.9rem" }}>
          Inspiration du jour
        </div>
      </Link>
    </nav>
  );
}
export default Navbar;
