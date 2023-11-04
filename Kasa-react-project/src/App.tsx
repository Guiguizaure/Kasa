import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/home";
import About from "./pages/About/about";
import Accomodation from "./pages/Accomodation/accomodation";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import Error from "./pages/Error/error";
import "./scss/main.scss";

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fiche-logement/:id" element={<Accomodation />} />
          <Route path="/a-propos" element={<About />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
