import React from 'react'
import {Container,Row, Col} from "react-bootstrap"
import MailchimpForm from './MailchimpForm'
import headerlogo from '../assets/img/headerlogo.jpg'
import nav1 from '../assets/img/nav-icon1.svg'
import nav2 from '../assets/img/nav-icon2.svg'
import nav3 from '../assets/img/nav-icon3.svg'

const Footer = () => {
  return (
    <footer className="footer" style={{paddingTop:50}}>
        <Container>
            <Row className="align-items-center">
              
                <Col sm={6}>
                <div className="header-icon"> 
                <img style={{borderRadius:'50%', width:80, height:80}} src={headerlogo} alt="" />
                </div>
                </Col>
                <Col sm={6} className="text-center text-sm-end">
                    <div className="social-icon">
                    <a href='#'  onClick={()=>{window.location.replace('https://www.linkedin.com/in/francisco-villagra/')}}><img src={nav1} alt="" /></a>
                    <a href='#'  onClick={()=>{window.location.replace('https://github.com/franvillagra')}}><img src={nav2} alt="" /></a>
                    <a href='#' onClick={()=>{window.location.replace('https://www.instagram.com/franvillagraa')}}><img src={nav3} alt="" /></a>
                 </div>
                    <p>Copyright {new Date().getFullYear()}. All riht reserved</p>
                </Col>
            </Row>
        </Container>
    </footer>
  )
}

export default Footer