import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown
} from "reactstrap";
import "./HeaderMenu.css";
import LoginModal from "../Modal/UpdatedModal";
import "./HeaderMenu.css";

class HeaderMenuNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.updateState = this.updateState.bind(this);
  }
  updateState() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    return (
      <div>
        <Navbar id="navBarBackground" light expand="md">
          <NavbarBrand href="/" id="webSiteTitle">
            BangAChain
          </NavbarBrand>
          <NavbarToggler onClick={this.updateState} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink id="navLinks" href="/components/">
                  Home
                </NavLink>
                {!this.props.parentState.token ? (
                  <span></span>
                ) : (
                  <React.Fragment>
                    <NavLink id="navLinks" href="/">
                      Profile
                    </NavLink>
                    <NavLink id="navLinks" href="/">
                      My Bag
                    </NavLink>
                  </React.Fragment>
                )}
              </NavItem>
              <NavItem>
                <NavLink
                  id="navLinks"
                  href="https://github.com/reactstrap/reactstrap"
                >
                  GitHub
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <LoginModal
                  setSession={this.props.setSession}
                  setLogin={this.props.setLogin}
                  setToken={this.props.setToken}
                  parentState={this.props.parentState}
                />
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default HeaderMenuNav;
