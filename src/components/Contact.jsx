import React from "react";
import "../style/Contact.css"; // Assure-toi que le fichier est bien nommé et dans le bon dossier
import contactImg from "../assets/team.jpg"; // Remplace par ton image réelle
import Title from "./Title";

function Contact() {
  return (
    <section className="py-5 bg-light" id="contact">
      <div className="container">
        <Title
          text="Contactez-nous"
          level={2}
          className="text-center mb-5 text-primary"
        />

        <div className="contact-grid">
          {/* Image */}
          <div className="contact-image">
            <img src={contactImg} alt="Contact" />
          </div>

          {/* Formulaire */}
          <div className="contact-form">
            <form>
              <div>
                <label htmlFor="name" className="form-label">
                  Nom
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Votre nom complet"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="exemple@email.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="5"
                  placeholder="Votre message..."
                  required
                ></textarea>
              </div>

              <button type="submit">Envoyer</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
