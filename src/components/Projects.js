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


const Projects = () => {

    const projects = [
       
        {
            title: "Gecros",
            description: "Lorem ipsum dolor sit amet consectetur ipisci consequatur porro quaerat reiciendis animi natus laudantium voluptatum ea eum, mollitia fuga sed dolores modi nemo quo.",
            tecnologies:".NET Core - Vue Js",
            imageUrl: project1
        },
        {
            title: "Molinos Agro",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid inventore illu nemo quo.",
            tecnologies:".NET Core - React Js",
            imageUrl: molinos
        },
        {
            title: "RACO",
            description: "Lorem ipsum dolor sit ametuid inventore illum dolorem adipisci consequatur porro quaerat reiciendis animi natus laudantium voluptatum ea eum, mollitia fuga sed dolores modi nemo quo.",
            tecnologies:".NET Core - Angular 8",
            imageUrl: raco
        },
        {
            title: "Rodeo Houston",
            description: "Lntore illum dolorem adipisci consequatur porro quaerat reiciendis animi natus laudantium voluptatum ea eum, mollitia fuga sed dolores modi nemo quo.",
            tecnologies:".NET Core - Flutter",
            imageUrl: rodeo
        },
        
        {
            title: "Cym",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.olorem adipisci consequatur porro quaerat reiciendis animi natus laudantium voluptatum ea eum, mollitia fuga sed dolores modi nemo quo.",
            tecnologies:".NET Core - Angular 10",
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
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Sapiente, architecto nesciunt maxime sunt et libero suscipit ut in
              ad hic velit excepturi. Culpa architecto quia perferendis corporis
              molestias qui quidem.
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