import React from "react";
import ReactDOM from "react-dom/client";
// import App from './App.tsx'
// import './index.css'

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/home";
import About from "./pages/About/about";
import Accomodation from "./pages/Accomodation/accomodation";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import Error from "./pages/Error/error";
import "../../Kasa-react-project/src/scss/main.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fiche-logement/:id" element={<Accomodation />} />
        <Route path="/a-propos" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);
