import { BrowserRouter, Route, Routes } from "react-router-dom";
import House from "./pages/houses";
import HouseControlPanel from "./pages/controlPanel";
import { HouseProvider } from "./context/HouseContext";

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <HouseProvider>
                <Routes>
                    <Route path="/" element={<House />} />
                    <Route path="/cpanel" element={<HouseControlPanel />} />
                </Routes>
            </HouseProvider>
        </BrowserRouter>
    );
}