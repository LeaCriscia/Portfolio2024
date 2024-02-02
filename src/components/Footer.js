import React from 'react';
import {FaYoutube, FaLinkedin} from 'react-icons/fa';
import { faSquareInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import './portfolio.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Footer = () => {
  return (
    <div className='footer1'>
      <footer className="footer">
        <div className='margin-footer'>
          <p className='quick-link'><a href='https://www.facebook.com/leacriscia.jaluague/'><FontAwesomeIcon icon={faFacebook} className='footer-icon'/>FACEBOOK</a></p>
          <p className='quick-link'><a href='https://www.instagram.com/leacriscia/'><FontAwesomeIcon icon={faSquareInstagram} className='footer-icon'/>INSTAGRAM</a></p>
          <p className='quick-link'><a href='https://www.linkedin.com/in/lea-criscia-jaluague-409853293/'><FaLinkedin className='footer-icon'/>LINKEDIN</a></p>
          <p className='quick-link'><a href='https://www.youtube.com/channel/UCd3sXCG2RjPC9coVjtzbn9g'><FaYoutube className='footer-icon'/>YOUTUBE</a></p>
        </div>
      </footer>
        <hr className='line'/>
            <div className='footer-copyrigth'>
              <p className='footer-term-p'>Copyright © 2023</p>
            </div>            
    </div>
  );
}

export default Footer;
