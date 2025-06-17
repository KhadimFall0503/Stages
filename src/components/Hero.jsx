import "../style/Hero.css";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="hero-section position-relative text-white" id="hero">
      {/* Overlay sombre */}
      <div className="hero-overlay"></div>

      <div className="container position-relative z-2 py-5">
        <div className="row">
          <div className="col-lg-8">
            {/* Titre animé */}
            <motion.h1
              className="display-4 fw-bold mb-3"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Gérer vos <span className="highlight">stages facilement</span>
            </motion.h1>

            {/* Paragraphe animé */}
            <motion.p
              className="lead mb-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Une plateforme intuitive pour publier, postuler et suivre les
              offres de stage. Pensée pour les étudiants, entreprises et
              responsables académiques.
            </motion.p>

            {/* Bouton animé */}
            <motion.div
              className="d-flex gap-3 flex-wrap"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <a
                href="#"
                className="btn btn-lg btn-primary d-flex align-items-center gap-2"
              >
                Commencer <FaArrowRight />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
