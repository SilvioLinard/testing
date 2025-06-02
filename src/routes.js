import react from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PlanetsScreens from "./screens/planets";
import PlanetScreens from "./screens/planet"


const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<PlanetsScreens />} />
      <Route path="/planet/:id" element={<PlanetScreens />} />

    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
