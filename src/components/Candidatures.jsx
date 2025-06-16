import { FaBuilding, FaCalendarAlt } from "react-icons/fa";
import Title from "./Title";

function Candidatures() {
  const candidatures = [
    {
      id: 1,
      stage: "Développeur Web",
      entreprise: "TechCorp",
      date: "2025-05-10",
      statut: "En attente",
    },
    {
      id: 2,
      stage: "Marketing Digital",
      entreprise: "MarketPlus",
      date: "2025-05-12",
      statut: "Accepté",
    },
    {
      id: 3,
      stage: "Analyste financier",
      entreprise: "FinanceX",
      date: "2025-05-15",
      statut: "Refusé",
    },
  ];

  const statutColors = {
    "En attente": "bg-warning text-dark",
    Accepté: "bg-success text-white",
    Refusé: "bg-danger text-white",
  };

  return (
    <section className="py-5 bg-light" id="candidatures">
      <div className="container">
        <Title text="Mes Candidatures" level={2} className="mb-5" />
        <div className="row g-4 justify-content-center">
          {candidatures.map(({ id, stage, entreprise, date, statut }) => (
            <div key={id} className="col-sm-12 col-md-6 col-lg-4">
              <div className="card h-100 shadow border-0">
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title fw-bold mb-2">{stage}</h5>
                  <p className="mb-1 text-muted">
                    <FaBuilding className="me-2" />
                    {entreprise}
                  </p>
                  <p className="mb-3 text-muted">
                    <FaCalendarAlt className="me-2" />
                    {new Date(date).toLocaleDateString()}
                  </p>
                  <span
                    className={`badge px-3 py-2 ${statutColors[statut]} rounded-pill w-fit mb-3`}
                  >
                    {statut}
                  </span>
                  <div className="mt-auto">
                    <button className="btn btn-primary w-100">
                      Voir les détails
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Candidatures;
