import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Bohata from "./Bohata";

export default function AppRoutes() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Bohata" element={<Bohata />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
