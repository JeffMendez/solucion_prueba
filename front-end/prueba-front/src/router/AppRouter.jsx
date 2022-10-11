import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomeConductores } from "../conductores/pages/HomeConductores";
import { HomeVehiculos } from "../vehiculos/pages/HomeVehiculos";

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/vehiculos" element={<HomeVehiculos />} />
            <Route path="/conductores" element={<HomeConductores />} />
        </Routes>
    )
}