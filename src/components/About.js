import React from "react";
import img from './images/resume_pic.png';
import './portfolio.css';
import Skillbar from "./Skillbar";
import Aboutme from './Aboutme';



const About = () => {
    return (
        <>
        <div className="container2">
            <div className="about1">
                <div className="first">
                    <img src={img} className="picture"/> 
                </div>
                <div className="second">       
                    <p><strong>Name:</strong> Lea Criscia A. Jaluague</p>
                    <p><strong>Email:</strong> jaluagueleacriscia@gmail.com</p>
                    <p><strong>Phone:</strong> 09673364790</p>
                </div>
                <Skillbar/>
            </div>
            <div className="RS4">
                <Aboutme/>
            </div>
             
        </div>
       
        </>
    )
}

export default About;