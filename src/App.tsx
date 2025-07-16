import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/Hero/About";
import Project from "./components/Hero/Project";
import Skills from "./components/Hero/Skills";
import Contact from "./components/Hero/Contact"; 
import Footer from "./components/Footer/footer";
function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About/>
      <Skills />
      <Project />
      <Contact />
      <Footer />

    </div>
  );
}

export default App;
