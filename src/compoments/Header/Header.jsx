import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import './Header.css'

function NavScrollExample() {
  return (
    <Navbar className="container" bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#" className="fs-2">knowledge-cafe</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 "
            style={{ maxHeight: "200px" }}
            navbarScroll
          >
            <Nav.Link className="nav_bar" href="#action1">Home</Nav.Link>
            <Nav.Link className="nav_bar" href="#action2">Blog</Nav.Link>
            <Nav.Link className="nav_bar" href="#action2">Qustion</Nav.Link>
            <Nav.Link className="nav_bar" href="#action2">Login</Nav.Link>
            
           
          </Nav>
          <img
            className="header_img"
            src="data:image/jpeg;base64,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"
          />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
