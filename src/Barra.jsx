import React from 'react';
import { Navbar, NavbarBrand, Container } from 'reactstrap';

export default function Barra() {
  return (
    <Navbar color="danger" dark expand="md">
      <Container className="justify-content-center text-center ">
        <NavbarBrand className="fs-5 fw-bold text-wrap text-break">
          <h3>Academia de Baile "Sergio el Bailador" (Mayra Fabiola Gutierrez Herrera)</h3>
        </NavbarBrand>
      </Container>
    </Navbar>
  );
}
