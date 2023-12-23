import Navbar from "../components/Navbar";
import AddGarden from "../pages/AddGarden";
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
import occitanie from "../assets/bambous-occitanie.png";
import { Link } from "react-router-dom/";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";

function HomePage(props) {
  /*const list = [
    {
      title: "Auvergne",
      img: "../assets/jardin_pimprenelle_3.jpg__559x440_q70_crop_subsampling-2_upscale.jpg",
      Link: "/region-auvergne",
    },

    {
      title: "Bourgogne",
      img: "../assets/courterolle.jpeg",
      Link: "/region-bourgogne",
    },
    {
      title: "Bretagne",
      img: "../assets/jardin_rocambole.jpeg",
      Link: "/region-bretagne",
    },
    {
      title: "Centre",
      img: "../assets/jardin_de_marie_3.jpeg",
      Link: "/region-centre-val-de-loire",
    },

    {
      title: "Grand-Est",
      img: "../assets/jardin_du_haut_chitelet.jpeg",
      Link: "/region-grand-est",
    },
    {
      title: "Hauts-de-France",
      img: "../assets/jardin_des_ifs.webp",
      Link: "/region-hauts-de-france",
    },
    {
      title: "Ile-de-France",
      img: "../assets/marly2.jpeg",
      Link: "/region-ile-de-france",
    },
    {
      title: "Martinique",
      img: "../assets/domaine-émeraude-jardins-martinique.jpeg",
      Link: "/region-martinique",
    },

    {
      title: "Normandie",
      img: "../assets/Jardin-du-Crapaud-a-Trois-Pattes--SMA--HAREL--6-.jpeg",
      Link: "/region-normandie",
    },

    {
      title: "Nouvelle-Aquitaine",
      img: "../assets/les-bambous-de-planbuisson6.jpeg",
      Link: "/region-nouvelle-aquitaine",
    },

    {
      title: "Occitanie",
      img: "../assets/bambous-occitanie.png",
      Link: "/region-occitanie",
    },

    {
      title: "Pays-de-la-loire",
      img: "../assets/les-jardins-du-marais-herbignac-1143144-3e9301e94429496a8960663847fd0d45.jpeg",
      Link: "/region-pays-de-loire",
    },

    {
      title: "Provence-Alpes-Côte-d'Azur",
      img: "../assets/puymeras.jpeg",
      Link: "/region-provence-alpes-cotes-dazur",
    },
  ];*/

  const styles = {
    placesContainer: {
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "center",
    },

    titleContainer: {
      paddingTop: "8rem",
    },

    cardContainer: {
      width: "18%",
      border: "1px solid rgb(193, 202, 211)",
      margin: "1rem",
      padding: "1rem",
      backgroundColor: "white",
      boxShadow: "0.25rem 0.25rem 0.25rem pink",
      boxSizing: "content-box",
      borderRadius: "1rem",
    },

    cardImage: {
      display: "flex",
      width: "100%",
      margin: "auto",
      justifyContent: "center",
      borderRadius: "1rem",
      boxShadow: "0.1rem 0.1rem 0.1rem lightgrey",
    },
  };

  /*return (
    <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
      {list.map((item, index) => (
        <Card
          shadow="sm"
          key={index}
          isPressable
          onPress={() => console.log("item pressed")}
        >
          <CardBody className="overflow-visible p-0">
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              alt={item.title}
              className="w-full object-cover h-[140px]"
              src={item.img}
            />
          </CardBody>
          <CardFooter className="text-small justify-between">
            <b>{item.title}</b>
            <p className="text-default-500">{item.price}</p>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}*/
  return (
    <div>
      <div style={styles.titleContainer}>
        <h1>Les jardins remarquables de France</h1>
      </div>
      <h3>
        Retrouvez par région les jardins labellisés "Jardins remarquables de
        France"
      </h3>
      <div style={styles.placesContainer}>
        <div style={styles.cardContainer}>
          <Link to={"/region-auvergne"}>
            <img src={auvergnerhonealpes} style={styles.cardImage} />
          </Link>

          <Link to={"/region-auvergne"} style={{ color: "black" }}>
            Auvergne
          </Link>
        </div>

        <div style={styles.cardContainer}>
          <Link to={"/region-bourgogne"}>
            <img src={bourgogne} style={styles.cardImage} />
          </Link>
          <Link to={"/region-bourgogne"} style={{ color: "black" }}>
            Bourgogne
          </Link>
        </div>
        <div style={styles.cardContainer}>
          <Link to={"/region-bretagne"}>
            <img src={bretagne} style={styles.cardImage} />
          </Link>
          <Link to={"/region-bretagne"} style={{ color: "black" }}>
            Bretagne
          </Link>
        </div>
        <div style={styles.cardContainer}>
          <Link to={"/region-centre-val-de-loire"}>
            <img src={centre} style={styles.cardImage} />
          </Link>
          <Link to={"/region-centre-val-de-loire"} style={{ color: "black" }}>
            Centre Val de Loire
          </Link>
        </div>
        <div style={styles.cardContainer}>
          <Link to={"/region-grand-est"}>
            <img src={grandest} style={styles.cardImage} />
          </Link>
          <Link to={"/region-grand-est"} style={{ color: "black" }}>
            Grand-Est
          </Link>
        </div>
        <div style={styles.cardContainer}>
          <Link to={"/region-hauts-de-france"}>
            <img src={hautsdefrance} style={styles.cardImage} />
          </Link>
          <Link to={"/region-hauts-de-france"} style={{ color: "black" }}>
            Hauts-de-France
          </Link>
        </div>
        <div style={styles.cardContainer}>
          <Link to={"/region-ile-de-france"}></Link>
          <img src={iledefrance} style={styles.cardImage} />
          <Link to={"/region-ile-de-france"} style={{ color: "black" }}>
            Ile-de-France
          </Link>
        </div>
        <div style={styles.cardContainer}>
          <Link to={"/region-martinique"}>
            <img src={martinique} style={styles.cardImage} />
          </Link>
          <Link to={"/region-martinique"} style={{ color: "black" }}>
            Martinique
          </Link>{" "}
        </div>
        <div style={styles.cardContainer}>
          <Link to={"/region-normandie"}>
            <img src={normandie} style={styles.cardImage} />
          </Link>
          <Link to={"/region-normandie"} style={{ color: "black" }}>
            Normandie
          </Link>{" "}
        </div>
        <div style={styles.cardContainer}>
          <Link to={"/region-nouvelle-aquitaine"}>
            <img src={nouvelleaquitaine} style={styles.cardImage} />
          </Link>
          <Link to={"/region-nouvelle-aquitaine"} style={{ color: "black" }}>
            Nouvelle-Aquitaine
          </Link>
        </div>

        <div style={styles.cardContainer}>
          <Link to={"/region-occitanie"}>
            <img src={occitanie} style={styles.cardImage} />
          </Link>
          <Link to={"/region-occitanie"} style={{ color: "black" }}>
            Occitanie
          </Link>{" "}
        </div>

        <div style={styles.cardContainer}>
          <Link to={"/region-pays-de-loire"}>
            <img src={paysdelaloire} style={styles.cardImage} />
          </Link>
          <Link to={"/region-pays-de-loire"} style={{ color: "black" }}>
            Pays de Loire
          </Link>
        </div>

        <div style={styles.cardContainer}>
          <Link to={"/region-provence-alpes-cotes-dazur"}>
            <img src={provencealpescotesdazur} style={styles.cardImage} />
          </Link>
          <Link
            to={"/region-provence-alpes-cotes-dazur"}
            style={{ color: "black" }}
          >
            Provence Alpes-Côtes-d'Azur
          </Link>
        </div>
      </div>
      <div
        style={{
          ...styles.Détails,
          color: "white",
          textAlign: "right",
          marginRight: "2rem",
          paddingBottom: "2rem",
        }}
      >
        Décembre 2023
      </div>
    </div>
  );
}

export default HomePage;
