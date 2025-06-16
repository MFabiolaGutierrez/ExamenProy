
import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import { Link } from 'react-router-dom';

const NavBarra = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar color="danger" dark expand="md" className="px-4">
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ms-auto" navbar>
          <NavItem>
            <NavLink tag={Link} to="/">Inicio</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/oferta">Oferta de Cursos</NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default NavBarra;
