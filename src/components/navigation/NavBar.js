import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../../../assets/img/logo.svg'
import nav1 from '../../../assets/img/nav-icon1.svg'
import nav2 from '../../../assets/img/nav-icon2.svg'
import nav3 from '../../../assets/img/nav-icon3.svg'

export const  NavBar=()=> {

  const [activeLink, setactiveLink] = useState('home');      
  const [scrolled, setscrolled] = useState(false);

  useEffect(() => {
    
  
    const onScroll = () => {
        if(window.scrollY > 50)
        {
          setscrolled(true);
        }
        else
        {
          setscrolled(false);
        }
    }

    window.addEventListener("scroll",onScroll);

    return () => window.removeEventListener("scroll", onScroll); 
  }, []);

const onUpdateActiveLink = (value) =>{
  setactiveLink(value);
}

  return (
    <Navbar bg="light" expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
            <img src={logo} alt="Logo"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggle-icon"></span>
            </Navbar.Toggle> 
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={()=>{onUpdateActiveLink('home')}}>Home</Nav.Link>
            <Nav.Link href="#link" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={()=>{onUpdateActiveLink('skills')}}>Skills</Nav.Link>
            <Nav.Link href="#link" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={()=>{onUpdateActiveLink('projects')}}>Projects</Nav.Link>
          </Nav>
          <span className="navbar-text">
              <div className="social-icon">
                <a href='#'><img src={nav1} alt="" /></a>
                <a href='#'><img src={nav2} alt="" /></a>
                <a href='#'><img src={nav3} alt="" /></a>
                </div>  
                <button className="vvd" onClick={null}><span>Let's Connect</span></button> 
          </span>   
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

