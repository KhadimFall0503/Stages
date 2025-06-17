import React from "react";
import "../style/Navbar.css";

function Navbar() {
  const links = [
    { label: "Accueil", href: "#hero" },
    { label: "À propos", href: "#about" },
    { label: "Vous êtes", href: "#profiles" },
    { label: "Admin", href: "#admin" },
    { label: "Enseignant", href: "#enseignant" },
    { label: "Étudiant", href: "#etudiant" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm border-bottom fixed-top p-3">
      <div className="container">
        <a className="navbar-brand fw-bold text-primary fs-3" href="#hero">
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
            {links.map(({ label, href }) => (
              <li className="nav-item" key={label}>
                <a className="nav-link" href={href}>
                  {label}
                </a>
              </li>
            ))}
            {/* Bouton Commencer */}
            <li className="nav-item ms-3">
              <a href="#hero" className="btn btn-primary">
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
