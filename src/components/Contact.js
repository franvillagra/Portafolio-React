import React,{useState} from 'react'
import {Container,Row, Col} from "react-bootstrap"
import contactImg from '../assets/img/contact-img.svg'
import TrackVisibility from 'react-on-screen'

const Contact = () => {

    const formInitialDetails ={
        firstName :'',
        lastName :'',
        email : '',
        phone: '',
        message: ''
    }

    const [formDetails, setformDetails] = useState(formInitialDetails);
    const [buttonText, setbuttonText] = useState('Send');
    const [status, setstatus] = useState({});

    const onFormUpdate = (category,value) =>{
        setformDetails(
            {
                ...formDetails,
                [category]: value
            }
        );
    }

    const handleSubmit = async (e) =>{
        e.preventDefault();
        setbuttonText("Sending..");
        let response = await fetch("http://localhost:5000/contact",
        {
            method:"POST",
            heade:{
                "Content-Type":"Application/json;charset=utf-8"
            },
            body: JSON.stringify(formDetails)
        })

        setbuttonText("Send");  
        let result = response.json();
        setformDetails(formInitialDetails);
        if(result.code == 200)
        {
            setstatus({success:true,message:"Message sent successfully"});
        }
        else
        {
            setstatus({success:true,message:"Something went wrong, please try again later."});
        }
    }

  return (
    <section className="contact" id="connect">
        <Container>
            <Row className="align-items-center">
                <Col md={6}>
                    <img src={contactImg} alt="Contact Us" />
                </Col>
                <Col md={6}>
      
                    <h2>Get In Touch</h2>
                    <form onSubmit={handleSubmit}>
                        <Row>
                            <Col sm={6} className="px-1">
                                <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName',e.target.value)} /> 
                            </Col>
                            <Col sm={6} className="px-1">
                                <input type="text" value={formDetails.lastName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName',e.target.value)} /> 
                            </Col>
                            <Col sm={6} className="px-1">
                                <input type="text" value={formDetails.email} placeholder="Email" onChange={(e) => onFormUpdate('email',e.target.value)} /> 
                            </Col>
                            <Col sm={6} className="px-1">
                                <input type="text" value={formDetails.phone} placeholder="Phone No." onChange={(e) => onFormUpdate('phone',e.target.value)} /> 
                            </Col>
                            <Col>
                                <textarea row={6} value={formDetails.message} placeholder="Write your message" onChange={(e) => onFormUpdate('message',e.target.value)} /> 
                                <button type="submit"><span>{buttonText}</span></button>
                           </Col>
                                {
                            status.message && 
                                <Col>
                                    <p className={status.success == false ?"danger" : "success"}>{status.message}</p>
                                </Col>
                                }
                        </Row>
                    </form>
                 
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Contact