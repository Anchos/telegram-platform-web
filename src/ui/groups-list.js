import * as React from "react";

import { Navbar, Nav, NavItem, NavLink, Container, Button } from "reactstrap";

export const GroupsList = () => (
  <Navbar>
    <Container>
      <Nav pills>
        <NavItem>
          <NavLink href="#" active>
            Channels
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink disabled href="#">
            Supergroups
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink disabled href="#">
            Bots
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink disabled href="#">
            Sticker sets
          </NavLink>
        </NavItem>
      </Nav>
      <Nav className="ml-auto flex-row" navbar>
        <NavItem className="mr-2">
          <Button color="primary">Add channel</Button>
        </NavItem>
        <NavItem>
          <Button color="primary" outline>
            FAQ
          </Button>
        </NavItem>
      </Nav>
    </Container>
  </Navbar>
);
