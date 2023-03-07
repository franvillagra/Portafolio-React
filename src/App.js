import './App.css';
import {NavBar} from './components/navigation/NavBar';
import {Banner} from './components/Banner';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WorkExperience from './components/WorkExperience';

function App() {
  return (
    <div className="App">
        <NavBar />
        <Banner />
        <Skills />
        <WorkExperience />
        <Projects />
        <Contact />
       <Footer />
    </div>
  );
}

export default App;
