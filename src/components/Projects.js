import React from 'react'
import { Container, Row, Col, Nav , Tab} from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png"
import project1 from "../assets/img/project-img1.png"
import project2 from "../assets/img/project2.png"
import molinos from "../assets/img/Molinos.png"
import rodeo from "../assets/img/ROdeo.png"
import raco from "../assets/img/Raco.png"
import TrackVisibility from 'react-on-screen';
import avatel from "../assets/img/Avatel.png"

const Projects = () => {

    const projects = [
          {
            title: "Avatel",
            description: "Web application for provision of mobile telephony, landline telephony and television.",
            tecnologies:".NET Core - Vue Js - Docker Oracle - Hangfire - RabbitMQ",
            imageUrl: avatel
        },
        {
            title: "Gecros",
            description: "Web Application of healthcare sector oriented to the management of medical coverage of the country.",
            tecnologies:".NET Core - Vue Js - SQL Server",
            imageUrl: project1
        },
        {
            title: "Molinos Agro",
            description: "Web Application for the agricultural sector for the management and control of tools, personnel and generation of different internal reports.",
            tecnologies:".NET Core - React Js - SQL Server",
            imageUrl: molinos
        },
        {
            title: "RACO",
            description: "Web application to manage different alarms that are activated by different changes in temperature, humidity, etc. and that notify the user to his mobile device.",
            tecnologies:".NET Core - Angular 8 - HeidiSQL",
            imageUrl: raco
        },
        {
            title: "Rodeo Houston",
            description: "Mobile application for one of the busiest festivals in Houston that includes ticket sales, user creation, integrations with external sdk, etc. and that is managed through a web application.",
            tecnologies:".NET Core - Flutter  - SQL Server - MySql",
            imageUrl: rodeo
        },
        
        {
            title: "Cym",
            description: "Web application for management and internal management of suppliers, customers, products, etc. company dedicated to the sale of construction materials.",
            tecnologies:".NET Core - Angular 10 - SQL Server",
            imageUrl: project2
        },
        
    ]
  return (
    <secion className="project" id="projects">
      <Container>
        <Row>
          <Col>
          <TrackVisibility>
          {({isVisible}) =>
          <div className={isVisible ? "animate__animated animate__bounce":""}>
            <h2>
              Projects
            </h2>
            <p>
            I have worked on several projects focused on different areas, such as health, agriculture, legal, among others. Below you can see some of them, together with the technologies that I have used
            </p></div>}
            </TrackVisibility>
            <Tab.Container id="projects-tab" defaultActiveKey="first">

            
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
            <Row>
                {
                    projects.map((project,index) =>{
                        
                        return(
                           <ProjectCard key={index}
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
    <img className="background-image-right" src={colorSharp2}></img>
    </secion>
  )
}

export default Projects