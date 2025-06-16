import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Footer from "./components/Footer";
import UseProfiles from "./components/UserProfiles";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <UseProfiles />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
