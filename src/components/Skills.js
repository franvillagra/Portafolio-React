import React from "react";
import  Carousel  from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container, Row, Col } from "react-bootstrap";
import colorSharp from "../assets/img/color-sharp.png"
import vuelogo from "../assets/img/Vue.svg"
import reactlogo from "../assets/img/React.svg"
import angularlogo from "../assets/img/Angular.svg"
import netlogo from "../assets/img/NET.svg"

const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills" >
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>
              Although my profile is more oriented to Full Stack development, with .NET in the backend, I have worked with differents technologies and tools.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div className="item">
                  <img src={netlogo} alt="Image" />
                  <h2>.NET Core - .NET Framework </h2>
                  <h4>4 years exp.</h4>
                </div>
                <div className="item">
                  <img src={reactlogo} alt="Image" />
                  <h2>React Js </h2>
                  <h4>2 years exp.</h4>
                </div>
                <div className="item">
                  <img src={angularlogo} alt="Image" />
                  <h2>Angular 8 - Angular 10</h2>
                  <h4>2 years exp.</h4>
                </div>
                <div className="item">
                  <img src={vuelogo} alt="Image" />
                  <h2>Vue Js</h2>
                  <h4>1.5 years exp.</h4>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img src={colorSharp} alt="" className="background-image-left" />
    </section>
  );
};

export default Skills;
