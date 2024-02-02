import React from 'react';
import { Container } from 'react-bootstrap';
import Boyets from './Boyets';
import GlamSalon from './GlamSalon';
import Portfoliohome from './Portfoliohome';

import './portfolio.css';

const home = () => {
  return (
    <>
    <Portfoliohome/>
    <div  className='RS1'>
      <Container className='Some1'>
          <h1 style={{color: 'pink', marginTop:50}}>SOME OF MY LATEST WORK</h1>
      </Container>
      <Container className='R8'>
        <GlamSalon className='R9'/>
        <Boyets className='R10'/>
      </Container>
    </div>
    
    </>
  )
}

export default home