import React, { useState } from "react";
import "../style/Faq.css";
import Title from "./Title";

const faqData = [
  {
    question: "Comment puis-je postuler à un stage ?",
    answer:
      "Vous pouvez parcourir les offres, cliquer sur celle qui vous intéresse et utiliser le bouton 'Postuler' pour soumettre votre candidature.",
  },
  {
    question: "Puis-je modifier ma candidature après l'envoi ?",
    answer:
      "Non, une fois la candidature envoyée, elle ne peut plus être modifiée. Veuillez vous assurer que toutes les informations sont correctes avant l'envoi.",
  },
  {
    question: "Comment les entreprises peuvent-elles publier une offre ?",
    answer:
      "Les entreprises doivent créer un compte, puis accéder à leur espace pour publier et gérer leurs offres de stage.",
  },
  {
    question: "Est-ce que la plateforme est gratuite pour les étudiants ?",
    answer:
      "Oui, la plateforme est totalement gratuite pour tous les étudiants.",
  },
];

function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleIndex = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section py-5 bg-light" id="faq">
      <div className="container">
        <Title text="Foire aux questions" level={2} className="mb-5" />
        <div className="faq-list border p-4 border-primary">
          {faqData.map(({ question, answer }, index) => {
            const isActive = activeIndex === index;
            return (
              <div
                key={index}
                className={`faq-item border-bottom py-3 ${
                  isActive ? "faq-active" : ""
                }`}
              >
                <button
                  className="faq-question d-flex justify-content-between align-items-center w-100 btn btn-link text-start"
                  onClick={() => toggleIndex(index)}
                  aria-expanded={isActive}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className="fw-semibold">{question}</span>
                  <span className="faq-icon fs-4">{isActive ? "−" : "+"}</span>
                </button>
                <div
                  id={`faq-answer-${index}`}
                  className={`faq-answer mt-2 ${
                    isActive ? "show" : "collapse"
                  }`}
                >
                  <p className="mb-0 text-muted">{answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Faq;
