import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavBar = () => {
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 50) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);

  return (
    <Navbar
      bg={colorChange ? "dark" : ""}
      variant={colorChange ? "dark" : ""}
      expand="lg"
      className="font-dmsans sticky top-0 z-0"
    >
      <Container>
        <Navbar.Brand href="#home" className="text-slate-50 font-bold text-3xl">
          J.
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto -mr-16">
            <Nav.Link
              href="#home"
              className="px-[52px] text-[#75b2bc] font-medium"
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#my-story"
              className="px-[52px] text-[#75b2bc] font-medium"
            >
              My Story
            </Nav.Link>
            <Nav.Link
              href="#hostels"
              className="px-[52px] text-[#75b2bc] font-medium"
            >
              Hostels
            </Nav.Link>
            <Nav.Link
              href="#books"
              className="px-[52px] text-[#75b2bc] font-medium"
            >
              Books
            </Nav.Link>
            <Nav.Link
              href="#contact"
              className="px-[52px] text-[#75b2bc] font-medium"
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
