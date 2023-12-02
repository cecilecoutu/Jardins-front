import Navbar from "../components/Navbar";
import React from "react";
import bourgogne from "../assets/courterolle.jpeg";
import martinique from "../assets/domaine-émeraude-jardins-martinique.jpeg";
import centre from "../assets/jardin_de_marie_3.jpeg";
import hautsdefrance from "../assets/jardin_des_ifs.webp";
import grandest from "../assets/jardin_du_haut_chitelet.jpeg";
import auvergnerhonealpes from "../assets/jardin_pimprenelle_3.jpg__559x440_q70_crop_subsampling-2_upscale.jpg";
import bretagne from "../assets/jardin_rocambole.jpeg";
import normandie from "../assets/Jardin-du-Crapaud-a-Trois-Pattes--SMA--HAREL--6-.jpeg";
import nouvelleaquitaine from "../assets/les-bambous-de-planbuisson6.jpeg";
import paysdelaloire from "../assets/les-jardins-du-marais-herbignac-1143144-3e9301e94429496a8960663847fd0d45.jpeg";
import iledefrance from "../assets/marly2.jpeg";
import provencealpescotesdazur from "../assets/puymeras.jpeg";
import { Link } from "react-router-dom/";

function HomePage(props) {
  const styles = {
    styleContainer: {
      width: "50%",
      display: "flex",
      flexDirection: "column",
    },
  };

  return (
    <div>
      <div style={styleContainer}>
        <img src={auvergnerhonealpes} />
        <Link to={"/region-auvergne"}>Auvergne</Link>
      </div>
      <Link to={"/region-bretagne"}>Bretagne</Link>
      <Link to={"/region-centre-val-de-loire"}>Centre Val de Loire</Link>
      <Link to={"/region-grand-est"}>Grand-Est</Link>
      <Link to={"/region-hauts-de-france"}>Hauts-de-France</Link>
      <Link to={"/region-ile-de-france"}>Ile-de-France</Link>
      <Link to={"/region-martinique"}>Martinique</Link>
      <Link to={"/region-normandie"}>Normandie</Link>
      <Link to={"/region-nouvelle-aquitaine"}>Nouvelle-Aquitaine</Link>
      <Link to={"/region-occitanie"}>Occitanie</Link>
      <Link to={"/region-pays-de-loire"}>Pays de Loire</Link>
      <Link to={"/region-provence-alpes-cotes-dazur"}>
        Provence Alpes-Côtes-d'Azur
      </Link>
      <Link to={"/region-bourgogne"}>Bourgogne</Link>
    </div>
  );
}

export default HomePage;
