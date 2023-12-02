import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BestPlaces from "./pages/BestPlaces";
import PlaceOfTheDay from "./pages/PlaceOfTheDay";
import Navbar from "./components/Navbar";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Projet| Jardins remarquables</h1>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/best-places" element={<BestPlaces />} />
        <Route path="/place-of-the-day" element={<PlaceOfTheDay />} />
        <Route path="/region-auvergne" element={<RegionAuvergne />} />
        <Route path="/region-bretagne" element={<RegionBretagne />} />
        <Route
          path="/region-centre-val-de-loire"
          element={<RegionCentreValDeLoire />}
        />
        <Route path="/region-grand-est" element={<RegionGrandEst />} />
        <Route
          path="/region-hauts-de-france"
          element={<RegionHautsDefrance />}
        />
        <Route path="/region-ile-de-france" element={<RegionIleDeFrance />} />
        <Route path="/region-martinique" element={<RegionMartinique />} />
        <Route path="/region-normandie" element={<RegionNormandie />} />
        <Route
          path="/region-nouvelle-aquitaine"
          element={<RegionNouvelleAquitaine />}
        />
        <Route path="/region-occitanie" element={<RegionOccitanie />} />
        <Route path="/region-pays-de-loire" element={<RegionPaysdeLoire />} />
        <Route
          path="/region-provence-alpes-cotes-dazur"
          element={<RegionProvenceAlpesCotesDazur />}
        />
      </Routes>
    </div>
  );
}

export default App;
