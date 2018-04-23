import * as React from "react";
import { Navbar, Nav, NavItem, Container, NavbarBrand, Button } from "reactstrap";

import { LoginButton } from "~/components/login-button";

export const Header = () => (
  <Navbar>
    <Container>
      <Nav navbar>
        <NavItem>
          <Button color="primary">Predlojenie veka bldjad</Button>
        </NavItem>
      </Nav>
      <NavbarBrand
        style={{
          position: "absolute",
          width: "100%",
          left: 0,
          textAlign: "center",
          margin: "auto",
          zIndex: -1,
        }}
      >
        BIPLANE
      </NavbarBrand>
      <Nav className="ml-auto" navbar>
        <NavItem>
          <LoginButton />
        </NavItem>
      </Nav>
    </Container>
  </Navbar>
);
