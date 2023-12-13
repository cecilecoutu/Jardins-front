import Navbar from "../components/Navbar";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function AddGarden(props) {
  const API_URL =
    "https://les-jardins-remarquables-de-france.vercel.app/jardins";
  const [formData, setFormData] = useState({
    nom_du_jardin: "",
    region: "",
    departement: "",
    types: "",
    description: "",
  });
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
    axios
      .post(`${API_URL}`, formData)
      .then((res) => {
        console.log("garden added successfully!");
        navigate("/nouveau-jardin");
      })
      .catch((e) => console.log(e));
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div>
      <h2>Proposer un jardin à labelliser</h2>
      <form onSubmit={handleSubmit}>
        <label style={{ marginRight: "50px", width: "100%" }}>
          Nom:
          <input
            type="text"
            name="nom_du_jardin"
            value={formData.nom_du_jardin}
            onChange={handleChange}
          />
        </label>
        <br></br>
        <label style={{ marginRight: "50px", width: "100%" }}>
          Région:
          <input
            type="text"
            name="region"
            value={formData.region}
            onChange={handleChange}
          />
        </label>
        <br></br>

        <label style={{ marginRight: "50px", width: "100%" }}>
          Département:
          <input
            type="text"
            name="departement"
            value={formData.departement}
            onChange={handleChange}
          />
        </label>
        <label style={{ marginRight: "50px", width: "100%" }}>
          Description:
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </label>
        <br></br>
        <label
          style={{ marginTop: "2rem", marginRight: "50px", width: "100%" }}
        >
          Type de jardin:
          <input
            type="text"
            name="types"
            value={formData.types}
            onChange={handleChange}
          />
        </label>
        <br></br>
        <button type="submit">Proposer une labellisation</button>
      </form>
    </div>
  );
}

export default AddGarden;
