import { Link } from "react-router-dom";
// import "../../scss/abstracts/variables/_colors.scss";
// import "../../scss/includes/_header.scss";
import logo from "../../assets/logo-png.png";

const Header = () => {
  return (
    <>
      <header className="container">
        <figure
          className="logo"
          style={{ backgroundImage: `url(${logo})` }}
        ></figure>
        <nav>
          <Link to="/">Accueil</Link>
          <Link to="/a-propos">A propos</Link>
        </nav>
      </header>
    </>
  );
};

export default Header;
