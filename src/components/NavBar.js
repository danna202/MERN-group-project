import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Container } from 'react-bootstrap'
import '../App.css';

function NavBar() {
    return (
        <div>
            <Container style={{ textAlign: "center" }}>
                <Navbar bg="light" expand="lg" >
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav>
                        </Nav>
                        <Nav style={{ padding: "24px 40px 20px 40px", backgroundColor: "lightgrey", fontSize: "18px", lineHeight: "26px", fontWeight: "bolder", marginLeft: "26em" }} >
                            <Nav.Link style={{ color: "#343538" }} href="/Home">Home</Nav.Link>
                            <Nav.Link style={{ color: "#343538" }} href="/menu">Menu</Nav.Link>
                            <Nav.Link style={{ color: "#343538" }} href="/about">About Us</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        </div>
    )
}

export default NavBar