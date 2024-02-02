import React from 'react';
import img from './images/pic2.jpg';
import img2 from './images/frontendwhite.png';
import img3 from './images/backendwhite.png';
import './portfolio.css';

const Portfoliohome = () => {
  return (
    <div className='header'>
        <img className='R5' src={img2} />
        <img className='R6'src={img} />
        <img className='R7'src={img3} />
        
    </div>
    
  )
}

export default Portfoliohome