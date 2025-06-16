import React from "react";
import "../style/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm border-bottom fixed-top p-3">
      <div className="container">
        <a className="navbar-brand fw-bold text-primary fs-3" href="#">
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

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav align-items-center mb-2 mb-lg-0">
            {[
              "Acceuil",
              "A propos",
              "Vous etes",
              "Admin",
              "Enseignant",
              "Etudiant",
              "Contact",
            ].map((item) => (
              <li className="nav-item" key={item}>
                <a className="nav-link" href="#">
                  {item}
                </a>
              </li>
            ))}
            {/* Bouton Commencer */}
            <li className="nav-item ms-3">
              <a href="#" className="btn btn-primary">
                Commencer
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
