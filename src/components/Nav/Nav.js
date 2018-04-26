import React from 'react';
import { Col, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

import './Nav.css';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {
    return (
      <Col>
        <Navbar color="faded" dark >
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar className='Nav'>
            <Nav navbar>
              <NavItem>
                <NavLink href="/">home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/aboutme">about me</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/projects">projects</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/contact">contact</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </Col>
    );
  }
}
