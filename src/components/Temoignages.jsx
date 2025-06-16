import "../style/Temoignages.css";

const testimonials = [
  {
    id: 1,
    name: "Alice Dupont",
    role: "Étudiante en informatique",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "Cette plateforme m'a permis de trouver un stage rapidement et facilement. Je recommande vivement !",
  },
  {
    id: 2,
    name: "Marc Lefevre",
    role: "Responsable RH",
    photo: "https://randomuser.me/api/portraits/men/35.jpg",
    text: "Un outil parfait pour publier nos offres et suivre les candidatures en temps réel.",
  },
  {
    id: 3,
    name: "Sophie Martin",
    role: "Chargée de stage",
    photo: "https://randomuser.me/api/portraits/women/68.jpg",
    text: "L’interface est intuitive et le suivi des candidatures est très simple à gérer.",
  },
];

function Temoignages() {
  return (
    <section className="temoignages-section py-5">
      <div className="container">
        <h2 className="temoignages-title text-center mb-5">
          Ce que disent nos utilisateurs
        </h2>
        <div className="temoignages-list">
          {testimonials.map(({ id, name, role, photo, text }) => (
            <div key={id} className="temoignage-card">
              <img src={photo} alt={name} className="temoignage-photo" />
              <p className="temoignage-text">"{text}"</p>
              <p className="temoignage-name">{name}</p>
              <p className="temoignage-role">{role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Temoignages;
