import { NavLink } from "react-router-dom";

function Error() {
  return (
    <div className="error-page">
      <h1 className="error-page__title">404</h1>
      <p className="error-page__desc">
        Oups! La page que vous demandez n'existe pas
      </p>
      <NavLink className="error-page__link" to="/">
        Retourner sur la page d’accueil
      </NavLink>
    </div>
  );
}

export default Error;
