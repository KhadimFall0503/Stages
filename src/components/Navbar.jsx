import React from "react";
import "../style/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm border-bottom fixed-top p-3">
      <div className="container">
        <a className="navbar-brand fw-bold text-primary" href="#">
          GESTION DES STAGES
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {["Offres", "Candidatures", "Partenaires", "Rapports Stage"].map(
              (item) => (
                <li className="nav-item" key={item}>
                  <a className="nav-link" href="#">
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>

          <form
            className="d-flex me-3"
            role="search"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              className="form-control me-2"
              type="search"
              placeholder="Rechercher un stage"
              aria-label="Rechercher un stage"
            />
            <button className="btn btn-outline-success" type="submit">
              Rechercher
            </button>
          </form>

          <div className="dropdown">
            <button
              className="btn btn-primary dropdown-toggle"
              type="button"
              id="dropdownConnexion"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Connexion
            </button>
            <ul
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="dropdownConnexion"
            >
              <li>
                <a className="dropdown-item" href="#">
                  Admin
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Utilisateur
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
