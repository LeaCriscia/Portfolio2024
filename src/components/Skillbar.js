import React from "react";
import './portfolio.css';
import Footer from './Footer'

function Skillbar () {
    return (
        
        <div className="container1" style={{marginTop: 20}}>
            <h3 className="title-text">SKILLS</h3>

            <div className="skill-box">
                <span className="title">HTML 90%</span>
                <div className="skill-bar">
                    <span className="skill-per html">
                        <span className="tooltip">90%</span>
                    </span>
                </div>
            </div>
            <div className="skill-box">
                <span className="title">CSS 90%</span>
                <div className="skill-bar">
                    <span className="skill-per css">
                        <span className="tooltip">90%</span>
                    </span>
                </div>
            </div>
            <div className="skill-box">
                <span className="title">Java 80%</span>
                <div className="skill-bar">
                    <span className="skill-per java">
                        <span className="tooltip">80%</span>
                    </span>
                </div>
            </div>
            <div className="skill-box">
                <span className="title">Javascript 80%</span>
                <div className="skill-bar">
                    <span className="skill-per javascript">
                        <span className="tooltip">80%</span>
                    </span>
                </div>
            </div>
            <div className="skill-box">
                <span className="title">React JS 80%</span>
                <div className="skill-bar">
                    <span className="skill-per reactjs">
                        <span className="tooltip">80%</span>
                    </span>
                </div>
            </div>
            <div className="skill-box">
                <span className="title">J Query 80%</span>
                <div className="skill-bar">
                    <span className="skill-per jquery">
                        <span className="tooltip">80%</span>
                    </span>
                </div>
            </div>
            <div className="skill-box">
                <span className="title">phpMyAdmin 80%</span>
                <div className="skill-bar">
                    <span className="skill-per php">
                        <span className="tooltip">80%</span>
                    </span>
                </div>
            </div>
            <div className="skill-box">
                <span className="title">Node JS 80%</span>
                <div className="skill-bar">
                    <span className="skill-per node">
                        <span className="tooltip">80%</span>
                    </span>
                </div>
            </div>
            <div className="skill-box">
                <span className="title">My SQL 80%</span>
                <div className="skill-bar">
                    <span className="skill-per SQL">
                        <span className="tooltip">80%</span>
                    </span>
                </div>
            </div>
        </div>
    
    )
}

export default Skillbar;