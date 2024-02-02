import React from "react";
import img from './images/photolab1.jpg';
import './portfolio.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faFacebookMessenger, faLinkedin, faFacebook, faYoutube } from "@fortawesome/free-brands-svg-icons";


const Contact = () => {
 return (
    <>
    <div className="content3">
    <div style={{display: "inline-block"}}>
        <img src={img} className="contactpic"/> 
    </div>
    <div  className="RS2">
        <div className="R14">
            
            <FontAwesomeIcon icon={faEnvelope} style={{marginBottom: 20, }} />
            
            <FontAwesomeIcon icon={faPhone} style={{marginBottom: 20}}/>
            <FontAwesomeIcon icon={faFacebook} style={{marginBottom: 20}} />
            <FontAwesomeIcon icon={faFacebookMessenger}  style={{marginBottom: 30}} />
            <FontAwesomeIcon icon={faLinkedin} style={{marginBottom: 20}} />
            <FontAwesomeIcon icon={faYoutube} style={{marginBottom: 20}} />
        </div>
    </div>
    <div className="R15"> 
    <p className="R16">jaluagueleacriscia@gmail.com</p>
    <p className="R16">09673364790</p>
    <p className="R16">Lea Criscia Abaricia Jaluague</p>
    <p className="R16">Lea Criscia Abaricia Jaluague</p>
    <p className="R16">Lea Criscia Jaluague</p>
    <p >LeaCriscia Jaluague</p>
        </div>
    </div>
  
    </>
 )
}

export default Contact;