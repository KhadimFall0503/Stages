import "../style/Stat.css";
import Title from "./Title";
import { FaBriefcase, FaUsers, FaBuilding } from "react-icons/fa";

function Stats() {
  return (
    <section className="py-5 bg-light text-center">
      <div className="container">
        <Title text="Statistiques" level={2} className="mb-4" />
        <p className="text-muted mb-5">
          Une plateforme fiable et utilisée par de nombreuses personnes.
        </p>
        <div className="row g-4">
          <div className="col-md-4">
            <div className="card bg-primary-custom border-0 shadow-sm p-4">
              <FaBriefcase className="text-white mb-3" size={40} />
              <h3 className="fw-bold">+120</h3>
              <p>Stages publiés</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card bg-primary-custom border-0 shadow-sm p-4">
              <FaUsers className="text-white mb-3" size={40} />
              <h3 className="fw-bold">+500</h3>
              <p>Utilisateurs actifs</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card bg-primary-custom border-0 shadow-sm p-4">
              <FaBuilding className="text-white mb-3" size={40} />
              <h3 className="fw-bold">+30</h3>
              <p>Entreprises partenaires</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Stats;
