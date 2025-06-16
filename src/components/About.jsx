import React from "react";
import "../style/About.css";
import teamImage from "../assets/team.jpg"; // tu peux remplacer par ton image

function About() {
  return (
    <section className="apropos-section py-5">
      <div className="container apropos-container">
        <div className="apropos-image">
          <img src={teamImage} alt="Notre équipe" />
        </div>
        <div className="apropos-content">
          <h2 className="apropos-title">À propos de notre plateforme</h2>
          <p className="apropos-text">
            Notre plateforme facilite la mise en relation entre étudiants et
            entreprises pour trouver des stages adaptés aux compétences et aux
            besoins de chacun.
          </p>
          <p className="apropos-text">
            Grâce à notre interface intuitive, les étudiants peuvent facilement
            postuler et suivre leurs candidatures, tandis que les entreprises
            peuvent publier et gérer leurs offres rapidement.
          </p>
          <p className="apropos-text">
            Nous nous engageons à offrir un service fiable, sécurisé et
            accessible à tous.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
