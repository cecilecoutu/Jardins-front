import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import GardenImage from "../assets/tree-decidious-svgrepo-com (1).svg";

// function BestPlaces(props) {
//   const API_URL =
//     "https://les-jardins-remarquables-de-france-ccilnins-projects.vercel.app/jardins";

//   const [jardins, setJardins] = useState([]);
//   const [query, setQuery] = useState("");

//   useEffect(() => {
//     axios
//       .get(`${API_URL}/search?q=${query}`)
//       .then((res) => {
//         setJardins(res.data);
//       })
//       .catch((e) => console.log(e));
//   }, [query]);

//   return (
//     <div>
//       <h1>All Gardens</h1>
//       <input
//         type="text"
//         name="search"
//         placeholder="Filter gardens"
//         onChange={(e) => getSuggestedQuery(e.target.value)}
//       ></input>
//     </div>
//   );
// }

// const styles = {
//   Tree: {
//     justifyContent: "center",
//     width: "5rem",
//   },
//   placesContainer: {
//     display: "flex",
//     flexDirection: "row",
//     flexWrap: "wrap",
//     justifyContent: "center",
//   },
//   cardContainer: {
//     width: "40%",
//     border: "1px solid rgb(193, 202, 211)",
//     boxSizing: "content-box",
//     borderRadius: "1rem",
//   },
//   cardText: {
//     display: "flex",
//     flexDirection: "column",
//     width: "80%",
//     margin: "auto",
//     paddingLeft: "1rem",
//     paddingRight: "1rem",
//     justifyContent: "center",
//   },
// };

const BestPlaces = () => {
  //   const [formData, setFormData] = useState({
  //     nom: "",
  //     email: "",
  //     message: "",
  //   });
  //   const handleChange = (e) => {
  //     const { name, value } = e.target;
  //     setFormData({
  //       ...formData,
  //       [name]: value,
  //     });
  //   };
  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     console.log("Formulaire soumis:", formData);
  //   };
  //   return (
  //     <div>
  //       <form onSubmit={handleSubmit}>
  //         <label htmlFor="nom">Nom :</label>
  //         <input
  //           type="text"
  //           id="nom"
  //           name="nom"
  //           value={formData.nom}
  //           onChange={handleChange}
  //           required
  //         />
  //         <label htmlFor="email">Email :</label>
  //         <input
  //           type="email"
  //           id="email"
  //           name="email"
  //           value={formData.email}
  //           onChange={handleChange}
  //           required
  //         />
  //         <label htmlFor="message">Mon jardin préféré:</label>
  //         <textarea
  //           id="message"
  //           name="message"
  //           rows="4"
  //           value={formData.message}
  //           onChange={handleChange}
  //           required
  //         ></textarea>
  //         <input type="submit" value="Envoyer" />
  //       </form>
  //     </div>
  //   );
};
export default BestPlaces;
