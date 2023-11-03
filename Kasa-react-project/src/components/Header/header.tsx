import { NavLink } from "react-router-dom";
import logo from "../../assets/logo-png.png";
import logoSmall from "../../assets/logo-small.svg";

const Header = () => {
  return (
    <>
      <header className="container">
        <div className="logo-wrapper">
          <img className="logo" src={logo} alt="" />
          <img className="logo-small" src={logoSmall} alt="" />
        </div>
        <nav>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Accueil
          </NavLink>
          <NavLink
            to="/a-propos"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            A propos
          </NavLink>
        </nav>
      </header>
    </>
  );
};

export default Header;
