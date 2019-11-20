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
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import LoginModal from "../Modal/Modal"

class HeaderMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      isOpen: false
    }
    this.updateState=this.updateState.bind(this);
  }
  updateState(){
    // const [isOpen, setIsOpen] = useState(false);
    // const toggle = () => setIsOpen(!this.state.isOpen);
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
            
                  <LoginModal setToken={this.props.setToken} token={this.props.token}
                    
              />
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
        
      </div>
    );
  }
}

export default HeaderMenu;
