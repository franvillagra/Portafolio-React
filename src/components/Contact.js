import React,{useState,useRef} from 'react'
import {Container,Row, Col} from "react-bootstrap"
import contactImg from '../assets/img/contact-img.svg'
import TrackVisibility from 'react-on-screen'
import emailjs from '@emailjs/browser';
import Alert from 'react-bootstrap/Alert';

const Contact = () => {
    const form = useRef();
    const formInitialDetails ={
        firstname :'',
        lastname :'',
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
        debugger;
        emailjs.sendForm('service_pdkepec', 'template_o52sqnh',form.current, 'JaqiNe03t2uAVxH4J')
      .then((result) => {
        setstatus({success:true,message:"Message sent successfully"});
        }, (error) => {
            setstatus({success:true,message:"Something went wrong, please try again later."});
        });

        setbuttonText("Send");  
       
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
                    <form  ref={form} onSubmit={handleSubmit}>
                        <Row>
                            <Col sm={6} className="px-1">
                                <input type="text" name="firstname" value={formDetails.firstname} placeholder="First Name" onChange={(e) => onFormUpdate('firstname',e.target.value)} /> 
                            </Col>
                            <Col sm={6} className="px-1">
                                <input type="text" name="lastname" value={formDetails.lastname} placeholder="Last Name" onChange={(e) => onFormUpdate('lastname',e.target.value)} /> 
                            </Col>
                            <Col sm={6} className="px-1">
                                <input type="text" name="email" value={formDetails.email} placeholder="Email" onChange={(e) => onFormUpdate('email',e.target.value)} /> 
                            </Col>
                            <Col sm={6} className="px-1">
                                <input type="text" name="phone" value={formDetails.phone} placeholder="Phone No." onChange={(e) => onFormUpdate('phone',e.target.value)} /> 
                            </Col>
                            <Col>
                                <textarea row={6} name="message" value={formDetails.message} placeholder="Write your message" onChange={(e) => onFormUpdate('message',e.target.value)} /> 
                                <button type="submit"><span>{buttonText}</span></button>
                           </Col>
                       
                                {
                            status.message && 
                            <Alert key={status.message} style={{ marginTop: 30}} variant={status.success === false ? "danger" : "primary"}>
                            {status.success === true ? "Message sent successfully. I will answer you as soon as possible " :"An error occurred while sending the message. Please, contact me through linkedin or send an email to fran96villagra@gmail.com to resolve your concern" }
                          </Alert>
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