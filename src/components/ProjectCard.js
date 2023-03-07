import React from 'react'
import { Container, Row, Col } from "react-bootstrap";

const ProjectCard = ({title,description,tecnologies,imageUrl}) => {
    
  return (
    <Col sm={6} md={4}>
        <div className="proj-imgbx">
             <div style={{textAlign: "center", marginTop: '30px' }}>
            <img src={imageUrl} style={{ width: title =="Rodeo Houston" ||  title == "Cym"? '150px':'300px', }}/>
            </div>
            <div className="proj-txtx">
                <h4>{title}</h4>
                <span>{description}</span>
                <br />
                <span>Technologies: {tecnologies}</span>
            </div>
        </div>
    </Col>
  )
}

export default ProjectCard