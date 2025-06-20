import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import "../style/About.css";
import teamImage from "../assets/team.jpg";
import Title from "./Title";

function About() {
  return (
    <section className="apropos-section py-5 bg-light" id="about">
      <div className="container">
        <div className="row align-items-center g-5">
          {/* Image à gauche avec animation */}
          <motion.div
            className="col-md-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src={teamImage}
              alt="Notre équipe"
              className="img-fluid rounded shadow-sm"
              style={{ objectFit: "cover", maxHeight: "400px", width: "100%" }}
            />
          </motion.div>

          {/* Texte à droite avec animation */}
          <motion.div
            className="col-md-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Title
              text="À propos de nous"
              level={2}
              className="mb-4 text-primary border-bottom border-3 border-primary pb-2"
            />
            <motion.p
              className="text-secondary fs-5 mb-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Notre plateforme facilite la mise en relation entre{" "}
              <strong>étudiants</strong> et <strong>entreprises</strong> pour
              trouver des stages adaptés aux compétences et besoins de chacun.
            </motion.p>
            <motion.p
              className="text-secondary fs-5 mb-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              Grâce à une interface intuitive, les étudiants peuvent facilement{" "}
              <strong>postuler</strong> et suivre leurs candidatures, tandis que
              les entreprises peuvent <strong>publier</strong> et gérer leurs
              offres en toute simplicité.
            </motion.p>
            <motion.p
              className="text-secondary fs-5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
            >
              Nous nous engageons à fournir un service <strong>fiable</strong>,{" "}
              <strong>sécurisé</strong> et accessible à tous.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
