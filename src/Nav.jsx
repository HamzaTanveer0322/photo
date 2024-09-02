import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import img from './images/search.jpg'

function Nav() {
  return (
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand  href="#home">Photos</Navbar.Brand>
     
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
           
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Nav;