import React from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar, NavItem, NavbarBrand, Container } from "reactstrap";
import Avatar from "@material-ui/core/Avatar";
const Heading = () => {
  return (
    <Navbar color="dark" dark>
      <Container>
        <NavbarBrand href="/">
          <Avatar />
        </NavbarBrand>
        <Nav>
          <NavItem>
            <Link className="btn btn-primary" to="/add">
              Add User
            </Link>
          </NavItem>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Heading;
