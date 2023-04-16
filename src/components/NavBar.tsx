import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Container } from 'react-bootstrap';
import '../SCSS/_navbar.scss'

function NavBar() {
  return (
    <header>
  <div className="header-content">
    <h1 className="App">Order-UPP</h1>
  </div>
    <div className="navbar-container">
      <Container>
        <Navbar bg="light" expand="lg" className="justify-content-center">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link href="/Home">Home</Nav.Link>
              <Nav.Link href="/menu">Order</Nav.Link>
              <Nav.Link href="/about">About Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </div>
    </header>
  )
}

export default NavBar;


