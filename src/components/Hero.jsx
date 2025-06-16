import "../style/Hero.css";
import { FaArrowRight } from "react-icons/fa";

function Hero() {
  return (
    <section className="hero-section position-relative text-white">
      {/* Overlay sombre */}
      <div className="hero-overlay"></div>

      <div className="container position-relative z-2 py-5">
        <div className="row">
          <div className="col-lg-8">
            <h1 className="display-4 fw-bold mb-3">
              Gérer vos <span className="highlight">stages facilement</span>
            </h1>
            <p className="lead mb-4 ">
              Une plateforme intuitive pour publier, postuler et suivre les
              offres de stage. Pensée pour les étudiants, entreprises et
              responsables académiques.
            </p>
            <div className="d-flex gap-3 flex-wrap">
              <a
                href="#"
                className="btn btn-lg btn-primary d-flex align-items-center gap-2"
              >
                Explorer les stages <FaArrowRight />
              </a>
              <a href="#" className="btn btn-lg btn-outline-light">
                S'inscrire
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
