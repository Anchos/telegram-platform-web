import * as React from "react";

import { Nav, NavItem, NavLink, Container } from "reactstrap";

export const GroupsList = () => (
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
  </Container>
);
