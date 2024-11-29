import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import nav1 from '../../assets/img/nav-icon1.svg'
import nav2 from '../../assets/img/nav-icon2.svg'
import nav3 from '../../assets/img/nav-icon3.svg'
import headerlogo from '../../assets/img/headerlogo.jpg'
import { HashLink } from 'react-router-hash-link';
import './Navbar.css';

export  const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [english, setEnglish] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
      <Navbar bg="light" expand="lg" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="#home">
            <div className="header-icon">
              <img style={{ borderRadius: '50%', width: 80, height: 80 }} src={headerlogo} alt="logo" />
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggle-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#experience" className={activeLink === 'experience' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('experience')}>Work Experience</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
              <Nav.Link href="#education" className={activeLink === 'education' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('education')}>Education</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href='#' onClick={() => { window.location.replace('https://www.linkedin.com/in/francisco-villagra/') }}><img src={nav1} alt="LinkedIn" /></a>
                <a href='#' onClick={() => { window.location.replace('https://github.com/franvillagra') }}><img src={nav2} alt="GitHub" /></a>
                <a href='#' onClick={() => { window.location.replace('https://www.instagram.com/franvillagraa') }}><img src={nav3} alt="Instagram" /></a>
              </div>
              <div className="social-icon" style={{ color: 'white'}}>
              <span className="language" onClick={() => { setEnglish(!english); localStorage.setItem('language', english ? "ES" : "EN"); }}>
                {english ? "ES" : "EN"}
              </span>
              </div>
              <HashLink to='#connect'>
                <button className="vvd"><span>Let’s Connect</span></button>
              </HashLink>
              <a>
                <button className="vvd" onClick={() => { window.open("https://drive.google.com/file/d/1pPNbU5CYbycNKdvpwkr-qSN9qj5Mjp8T/view?usp=drive_link", "_blank"); }}>
                  <span>Curriculum Vitae</span>
                </button>
              </a>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
};
