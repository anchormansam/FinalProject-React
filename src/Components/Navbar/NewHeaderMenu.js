import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  // DropdownToggle,
  // DropdownMenu,
  // DropdownItem
} from "reactstrap";
import "./HeaderMenu.css";
import LoginModal from "../Modal/UpdatedModal";

class HeaderMenuNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.updateState = this.updateState.bind(this);
  }
  updateState() {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!this.state.isOpen);
  }

  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">BangAChain</NavbarBrand>
          <NavbarToggler onClick={this.updateState} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink href="/components/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">
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
