import "../style/UserProfiles.css";
import {
  FaUserShield,
  FaUserGraduate,
  FaChalkboardTeacher,
} from "react-icons/fa";
import Title from "./Title";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

function UserProfiles() {
  const cards = [
    {
      id: "admin",
      title: "Admin",
      icon: <FaUserShield size={50} className="mb-4" />,
      description:
        "Gérez les offres de stage, les utilisateurs et les rapports.",
      className: "bg-primary text-white",
    },
    {
      id: "etudiant",
      title: "Étudiant",
      icon: <FaUserGraduate size={50} className="mb-4" />,
      description: "Explorez les stages et suivez vos candidatures facilement.",
      className: "bg-success text-white",
    },
    {
      id: "enseignant",
      title: "Enseignant",
      icon: <FaChalkboardTeacher size={50} className="mb-4" />,
      description:
        "Suivez les stages de vos étudiants et validez leurs rapports.",
      className: "bg-warning text-dark",
    },
  ];

  return (
    <section className="py-5 bg-light" id="profiles">
      <div className="container">
        <Title
          text="Vous êtes..."
          level={2}
          className="mb-5 text-center text-primary"
        />
        <div className="row g-4">
          {cards.map((card, index) => (
            <div className="col-md-4" key={card.id}>
              {/* Ancre invisible */}
              <div
                id={card.id}
                style={{ position: "relative", top: "-100px" }}
              ></div>

              {/* motion.div utilisé ici */}
              <motion.div
                className={`card profile-card ${card.className} border-0 shadow-lg text-center p-5 h-100`}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
                variants={cardVariants}
              >
                {card.icon}
                <h5 className="fw-bold mb-3">{card.title}</h5>
                <p
                  className={`fs-6 ${
                    card.className.includes("text-dark")
                      ? "text-dark"
                      : "text-white-75"
                  }`}
                >
                  {card.description}
                </p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default UserProfiles;
