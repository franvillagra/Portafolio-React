import React from 'react'
import { Container, Row, Col } from "react-bootstrap";

const ProjectCard = ({title,description,tecnologies,imageUrl}) => {
    debugger;
  return (
    <Col sm={6} md={4}>
        <div className="proj-imgbx">
            <img src={imageUrl}  />
            <div className="proj-txtx">
                <h4>{title}</h4>
                <span>{description}</span>
                <span>Technologies: {tecnologies}</span>
            </div>
        </div>
    </Col>
  )
}

export default ProjectCard