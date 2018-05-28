import * as React from "react";
import { Navbar, Nav, NavItem, Container, NavbarBrand, Button } from "reactstrap";
import Link from "redux-first-router-link";

import { LoginButton } from "src/components/login-button";

export const Header = () => (
  <Navbar>
    <Container>
      <div style={{ display: "flex", width: "100%" }}>
        <Nav navbar style={{ marginRight: "auto" }}>
          <NavItem>
            <Button color="primary">Predlojenie veka bldjad</Button>
          </NavItem>
        </Nav>
        <NavbarBrand
          tag="span"
          style={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Link to="/">BIPLANE</Link>
        </NavbarBrand>
        <Nav navbar style={{ marginLeft: "auto" }}>
          <NavItem>
            <LoginButton />
          </NavItem>
        </Nav>
      </div>
    </Container>
  </Navbar>
);
