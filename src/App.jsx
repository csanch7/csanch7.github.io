import About from "./components/About";
import BeyondCode from "./components/BeyondCode";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-ink text-slate-100">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(88,225,193,0.14),transparent_30%),radial-gradient(circle_at_85%_15%,rgba(255,155,113,0.16),transparent_25%),radial-gradient(circle_at_50%_120%,rgba(96,112,255,0.12),transparent_35%)]" />
        <div className="absolute inset-0 bg-grid bg-[size:42px_42px] opacity-[0.07]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,11,20,0.1),rgba(7,11,20,0.88))]" />
      </div>

      <Navbar />

      <main className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <BeyondCode />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
