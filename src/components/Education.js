import React from 'react'
import { Container, Row, Col, Nav , Tab} from "react-bootstrap";
import EducationCard from "./EducationCard";
import colorSharp2 from "../assets/img/color-sharp2.png"
import unc from "../assets/img/logoFCE.png"
import utn from "../assets/img/UTN_LOGO_BLANCO.png"
import TrackVisibility from 'react-on-screen';
import avatel from "../assets/img/Avatel.png"

const Education = () => {

    const projects = [
          {
            title: "Software Engineer - UTN FRC",
            description: "Graduated from the Universidad Tecnológica Nacional - Facultad Regional Córdoba. Period from 2014 to 2021.",
            titles:"Information Systems Engineer",
            imageUrl: utn
        },
        {
            title: "MBA - UNC FCE", 
            description: "Studying the second and final year of the MBA (Master in Business Administration) at Universidad Nacional de Córdoba.   \n   From 2024  ",
            titles:"",
            imageUrl: unc
        }
        
    ]
  return (
    <secion className="project" id="education">
      <Container>
        <Row>
          <Col>
          <TrackVisibility>
          {({isVisible}) =>
          <div className={isVisible ? "animate__animated animate__bounce":""}>
            <h2>
              Education
            </h2></div>}
            </TrackVisibility>
            <Tab.Container id="education-tab" defaultActiveKey="first">

            
       {/*      <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
      <Nav.Item>
        <Nav.Link eventKey="first">Tab One</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="second">Option 2</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="third">Option 3</Nav.Link>
      </Nav.Item>
    </Nav> */}
    <Tab.Content>
        <Tab.Pane eventKey="first">
            <Row style={{placeContent: 'center'}}>
                {
                    projects.map((project,index) =>{
                        
                        return(
                           <EducationCard key={index}
                           {...project} />
                        )
                    })
                }
            </Row>
        </Tab.Pane>
        <Tab.Pane eventKey="second"></Tab.Pane>
        <Tab.Pane eventKey="third"></Tab.Pane>
    </Tab.Content>
    </Tab.Container>
          </Col>
        </Row>
      </Container>
    </secion>
  )
}

export default Education