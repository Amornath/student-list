import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/create">Features</NavLink>
      {/* <NavLink href="#pricing">Pricing</NavLink> */}
    </Nav>
    </Container>
  </Navbar>
 
  );
}
 
export default NavBar;