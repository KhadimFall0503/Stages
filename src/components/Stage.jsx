import React from "react";
import Title from "./Title";

const stages = [
  {
    id: 1,
    titre: "Développeur Frontend",
    entreprise: "TechCorp",
    description: "Stage de 3 mois en développement React.js.",
  },
  {
    id: 2,
    titre: "Assistant Marketing",
    entreprise: "MarketPlus",
    description: "Stage en marketing digital et communication.",
  },
  {
    id: 3,
    titre: "Data Analyst Junior",
    entreprise: "DataWorld",
    description: "Stage sur analyse de données et visualisation.",
  },
  {
    id: 4,
    titre: "Développeur Backend",
    entreprise: "SoftSolutions",
    description: "Stage en développement Django REST API.",
  },
  {
    id: 5,
    titre: "UX/UI Designer",
    entreprise: "DesignPro",
    description: "Stage en conception d'interfaces utilisateur modernes.",
  },
  {
    id: 6,
    titre: "Chef de Projet Junior",
    entreprise: "GestionPlus",
    description: "Stage en gestion de projet Agile et Scrum.",
  },
  {
    id: 7,
    titre: "Support Technique",
    entreprise: "HelpTech",
    description: "Stage en assistance technique et relation client.",
  },
];

function StageTable() {
  return (
    <section className="py-5 bg-white">
      <div className="container">
        <Title
          text="Liste des Stages"
          level={2}
          className="mb-4 text-primary"
        />
        <div className="table-responsive">
          <table className="table table-striped table-hover align-middle">
            <thead className="table-primary">
              <tr>
                <th>#</th>
                <th>Titre</th>
                <th>Entreprise</th>
                <th>Description</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {stages.map((stage, index) => (
                <tr key={stage.id}>
                  <td>{index + 1}</td>
                  <td className="fw-bold">{stage.titre}</td>
                  <td>{stage.entreprise}</td>
                  <td>{stage.description}</td>
                  <td>
                    <button className="btn btn-sm btn-outline-primary">
                      Voir plus
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default StageTable;
