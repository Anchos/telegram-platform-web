import * as React from "react";
import { Navbar, Nav, NavItem, Container, NavbarBrand } from "reactstrap";

import { LoginButton } from "~/components/login-button";

export const Header = () => (
  <Navbar>
    <Container>
      <NavbarBrand>BIPLANE</NavbarBrand>
      <Nav className="ml-auto" navbar>
        <NavItem>
          <LoginButton />
        </NavItem>
      </Nav>
    </Container>
  </Navbar>
);
