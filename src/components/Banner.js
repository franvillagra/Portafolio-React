import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/IMG_1317.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen'
import { isVisible } from "@testing-library/user-event/dist/utils";


export const Banner = (english) => {

  const [placeholder, setPlaceholder] = React.useState('');
  const string = english ? 'Full Stack Developer - Software Engineer' : 'Desarrollador Full Stack - Ingeniero de Software';
  const index = React.useRef(0);

  React.useEffect(() => {
    function tick() {
      let stringPlaceholder = placeholder;
      let newValue = stringPlaceholder + string[index.current];
      if (newValue.includes("undefined")) {
        newValue = "";
        index.current = -1;
      }
      setPlaceholder(newValue);
      index.current++;
    }

    if (index.current < string.length) {
      let addChar = setInterval(tick, 500);
      return () => clearInterval(addChar);
    }
  }, [placeholder, english]);

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => 
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h1><span className="wrap">{placeholder}</span></h1>
                  <p>
                    Hello! I am Francisco Villagra. Software Engineer, Full Stack Programmer and passionate about technology. Welcome to my portfolio where you can learn a little about the projects I have worked on and the technologies I have used since my beginnings in programming in 2018.
                  </p>
                </div>
              }
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="Header img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};