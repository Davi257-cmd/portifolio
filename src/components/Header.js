import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top" className="custom-navbar">
      <Container>
        <Navbar.Brand href="#home" className="fw-bold fs-3">
          DL
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#linguagens" className="text-white px-3">Linguagens</Nav.Link>
            <Nav.Link href="#tecnologias" className="text-white px-3">Tecnologias</Nav.Link>
            <Nav.Link href="#organizacoes" className="text-white px-3">Organizações</Nav.Link>
            <Nav.Link href="#certificacoes" className="text-white px-3">Certificações</Nav.Link>
            <Nav.Link href="#experiencia" className="text-white px-3">Experiência</Nav.Link>
            <Nav.Link href="#contato" className="text-white px-3">Contato</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
