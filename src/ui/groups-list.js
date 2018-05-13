import * as React from "react";
import { Navbar, Nav, NavItem, NavLink, Container, Button } from "reactstrap";
import Link from "redux-first-router-link";

export const GroupsList = () => (
  <Navbar>
    <Container>
      <Nav pills>
        <NavItem>
          <Link className="nav-link active" to="/channels">
            Channels
          </Link>
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
