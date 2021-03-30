import React from "react";
import { Navbar, Nav } from "react-bootstrap";

class NavBar extends React.Component {
  constructor(props) {
    console.log("Constructor log");
    super(props);
    this.state = {};
  }
  render() {
    console.log("Render log");
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          {this.props.title} -{" "}
          {this.props.links.some((link) => link === "Alfredo")
            ? "The perfect place for pasta lovers"
            : "Strive for food"}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            {this.props.links.map((link) => (
              <Nav.Link key={link} href={"#" + link.toLowerCase()}>
                {link}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavBar;

// functional components are a touch faster than class based ones
