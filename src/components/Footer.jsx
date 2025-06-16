import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import "../style/Footer.css";

function Footer() {
  return (
    <footer className="footer bg-dark text-white pt-5 pb-3">
      <div className="container">
        <div className="row g-4">
          {/* Section Contact */}
          <div className="col-md-4">
            <h5 className="mb-3">Contact</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <FaMapMarkerAlt className="me-2" /> Dakar, Sénégal
              </li>
              <li className="mb-2">
                <FaPhoneAlt className="me-2" /> +221 77 345 79 34
              </li>
              <li>
                <FaEnvelope className="me-2" /> contact@plateformestage.sn
              </li>
            </ul>
          </div>

          {/* Section Liens rapides */}
          <div className="col-md-4">
            <h5 className="mb-3">Liens rapides</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#hero" className="text-white text-decoration-none">
                  Accueil
                </a>
              </li>
              <li>
                <a href="#offres" className="text-white text-decoration-none">
                  Offres
                </a>
              </li>
              <li>
                <a
                  href="#candidatures"
                  className="text-white text-decoration-none"
                >
                  Candidatures
                </a>
              </li>
              <li>
                <a href="#faq" className="text-white text-decoration-none">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Réseaux sociaux */}
          <div className="col-md-4 text-md-end">
            <h5 className="mb-3">Suivez-nous</h5>
            <div className="d-flex justify-content-md-end gap-3">
              <a href="#" className="text-white fs-4">
                <FaFacebook />
              </a>
              <a href="#" className="text-white fs-4">
                <FaTwitter />
              </a>
              <a href="#" className="text-white fs-4">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-4 pt-3 border-top border-secondary">
          <p className="mb-1">
            © {new Date().getFullYear()} Plateforme de Stages – Tous droits
            réservés.
          </p>
          <p className="mb-0" style={{ fontSize: "0.9rem", opacity: 0.7 }}>
            Développé avec ❤️ par <strong>Khadim Fall</strong>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
