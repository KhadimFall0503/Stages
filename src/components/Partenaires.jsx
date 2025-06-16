import React from "react";
import Title from "./Title";
import partner1 from "../assets/partner1.jpg";
import "../style/Partenaires.css"; // fichier CSS séparé

function Partenaires() {
  const partners = [
    { id: 1, name: "Entreprise A", logo: partner1 },
    { id: 2, name: "Entreprise B", logo: partner1 },
    { id: 3, name: "Entreprise C", logo: partner1 },
    { id: 4, name: "Entreprise D", logo: partner1 },
  ];

  return (
    <section className="partners-section">
      <div className="partners-container">
        <Title text="Nos Partenaires" level={2} className="text-center mb-4" />
        <p className="partners-description">
          Nous collaborons avec des entreprises reconnues pour offrir les
          meilleures opportunités.
        </p>

        <div className="partners-grid">
          {partners.map(({ id, name, logo }) => (
            <div key={id} className="partner-card">
              <img src={logo} alt={`${name} logo`} className="partner-logo" />
              <p className="partner-name">{name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Partenaires;
