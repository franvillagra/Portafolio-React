import './App.css';
import {NavBar} from './components/navigation/NavBar';
import {Banner} from './components/Banner';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WorkExperience from './components/WorkExperience';
import {
  BrowserRouter as Router
} from "react-router-dom";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
    <div className="App">
        <NavBar />
        <Banner />
        <Skills />
        <WorkExperience />
        <Projects />
        <Education />
        <Contact />
       <Footer />
    </div>
    </Router>
  );
}

export default App;
