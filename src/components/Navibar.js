import {Container, Nav, Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './portfolio.css';

const Navibar=()=> {
  return (
    <>
      <Navbar className='R1' bg="dark" data-bs-theme="dark">
        <Container className='R2'>
          <Navbar.Brand className='R3' as={Link} to={"/"}>Lea Criscia A. Jaluague</Navbar.Brand>
          <Nav className="me-auto R4">
            <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
            <Nav.Link as={Link} to={"/About"}>About</Nav.Link>
            <Nav.Link as={Link} to={"/Resume"}>Resume</Nav.Link>
            <Nav.Link as={Link} to={"/Contact"}>Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Navibar;