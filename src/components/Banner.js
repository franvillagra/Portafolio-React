import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";

export const Banner = () => {
  const [LoopNum, setLoopNum] = useState(0);
  const [IsDeleting, setIsDeleting] = useState(false);
  const toRotate = [
    "Web Designer",
    "Web Developer",
    "Mobile Developer",
  ];
  const [text, settext] = useState("");
  const period = 2000;
  const [delta, setDelta] = useState(300 - Math.random() * 100);

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, []);

  const tick = () => {
    let i = LoopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = IsDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    settext(updatedText);
    console.log(updatedText);

    if (IsDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!IsDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if( IsDeleting && updatedText === "")
    {
      setIsDeleting(false);
      setLoopNum(LoopNum + 1);
      setDelta(500);
    }
  };

  return (
    <secion className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
          
            <h1>
              <span className="wrap">{text}</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Sapiente, architecto nesciunt maxime sunt et libero suscipit ut in
              ad hic velit excepturi. Culpa architecto quia perferendis corporis
              molestias qui quidem.
            </p>
            <button>
              Let's Connect <ArrowRightCircle size={25} /> 
            </button>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="Header img" />
          </Col>
        </Row>
      </Container>
    </secion>
  );
};
