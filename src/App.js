import './App.css';
import NavBar         from './components/NavBar';
import Hero           from './components/Hero';
import About          from './components/About';
import TechStack      from './components/TechStack';
import Experience     from './components/Experience';
import Projects       from './components/Projects';
import Certifications from './components/Certifications';
import Achievements   from './components/Achievements';
import Contact        from './components/Contact';
import Footer         from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <About />
      <TechStack />
      <Experience />
      <Projects />
      <Certifications />
      <Achievements />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
