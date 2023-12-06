import React from "react";
import { Link } from "react-router-dom";

function Navbar(props) {
  const styles = {
    link: {
      margin: "20px",
    },
  };
  return (
    <nav>
      <Link to={"/"}>Home</Link>
      <br></br>
      <Link to={"/inspiration-du-jour"}>Inspiration du jour</Link>
    </nav>
  );
}

export default Navbar;
