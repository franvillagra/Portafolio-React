import React from "react";
import  Carousel  from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container, Row, Col } from "react-bootstrap";
import colorSharp from "../assets/img/color-sharp.png"
import macena from "../assets/img/Macena.jpg"
import huenei from "../assets/img/Huenei.jpg"
import dsntec from "../assets/img/Dsntec.jpg"
import wirall from "../assets/img/Wirall.jpg"
import taglatam from "../assets/img/Tag.png"

const WorkExperience = () => {
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
    <section className="experience" id="experience" >
      <Container>
        <Row>
          <Col>
            <div className="experience-bx">
              <h2>Work Experience</h2>
              <p>
              Some of the companies I have worked with that trusted my skills.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="experience-slider"
              >
                <div className="item">
                  <img src={macena} alt="Image" style={{height:154,width:154}}/>
                  <h2>Macena S.A</h2>
                 
                </div>
                <div className="item">
                  <img src={huenei} alt="Image" style={{height:154,width:154}}/>
                  <h2>Huenei</h2>
                </div>
                <div className="item">
                  <img src={taglatam} alt="Image" style={{height:154,width:154}}/>
                  <h2>Tag Latam</h2>
                </div>
                <div className="item">
                  <img src={wirall} alt="Image" style={{height:154,width:154}}/>
                  <h2>Wirall</h2>
                </div>
                <div className="item">
                  <img src={dsntec} alt="Image" style={{height:154,width:154}}/>
                  <h2>DsnTec</h2>
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

export default WorkExperience;
