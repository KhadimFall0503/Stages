import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Stat from "./components/Stat";
import Candidatures from "./components/Candidatures";
import Partenaires from "./components/Partenaires";
import About from "./components/About";
import Temoignages from "./components/Temoignages";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Stage from "./components/Stage";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Stage />
      <Candidatures />
      <Partenaires />
      <Temoignages />
      <Stat />
      <Faq />
      <Footer></Footer>
    </div>
  );
}

export default App;
