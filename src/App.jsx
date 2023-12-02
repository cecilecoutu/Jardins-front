import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RegionAuvergneRhoneAlpes from "./pages/RegionAuvergne-Rhone-Alpes";
import RegionBretagne from "./pages/RegionBretagne";
import RegionBourgogne from "./pages/RegionBourgogneFrancheComte";
import RegionCentreValDeLoire from "./pages/RegionCentreValdeLoire";
import RegionGrandest from "./pages/RegionGrandEst";
import RegionHautsDefrance from "./pages/RegionHautsdeFrance";
import RegionIleDeFrance from "./pages/RegionIleDeFrance";
import RegionMartinique from "./pages/RegionMartinique";
import RegionNormandie from "./pages/RegionNormandie";
import RegionNouvelleAquitaine from "./pages/RegionNouvelleAquitaine";
import RegionOccitanie from "./pages/RegionOccitanie";
import RegionPaysdeLoire from "./pages/RegionPaysDeLoire";
import RegionProvenceAlpesCotesDazur from "./pages/RegionProvenceAlpesCotesDazur";

import Navbar from "./components/Navbar";
import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Projet| Jardins remarquables</h1>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/region-auvergne" element={<RegionAuvergneRhoneAlpes />} />
        <Route path="/region-bretagne" element={<RegionBretagne />} />
        <Route
          path="/region-centre-val-de-loire"
          element={<RegionCentreValDeLoire />}
        />
        <Route path="/region-bourgogne" element={<RegionBourgogne />} />
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
