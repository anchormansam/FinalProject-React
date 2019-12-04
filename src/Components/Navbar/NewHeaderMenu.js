import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from "reactstrap";
import "./HeaderMenu.css";
import LoginModal from "../Modal/UpdatedModal";
import "./HeaderMenu.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// Feature to be added
// import CreateProfile from "../Profile/Profile";

import JumbotronOne from "../Jumbotron/Jumbotron";
import JumbotronTwo from "../Jumbotron/Jumbotron2";
import JumbotronThree from "../Jumbotron/Jumbotron3";
import BagviewJumbo from "../Jumbotron/BagviewJumbo";
import CreateBag from "../Bag/Create";

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
      <Router>
        <div>
          <Navbar id="navBarBackground" light expand="md">
            <NavbarBrand href="/home" to="/home" id="webSiteTitle">
              BangAChain
            </NavbarBrand>
            <NavbarToggler onClick={this.updateState} />

            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <LoginModal
                    setSession={this.props.setSession}
                    setLogin={this.props.setLogin}
                    setToken={this.props.setToken}
                    parentState={this.props.parentState}
                  />
                </NavItem>
                {!this.props.token ? (
                  <span></span>
                ) : (
                  <React.Fragment>
                    <NavItem>
                      <Link id="navLinks" to="/home"></Link>
                    </NavItem>

                    <NavbarBrand href="/home" to="/home" id="menuTitle">
                      Home
                    </NavbarBrand>
               
                    <NavbarBrand href="/createbag" to="/createbag" id="menuTitle">
                      Create Bag
                    </NavbarBrand>
                  
                    <NavbarBrand href="/mybagofdiscs" to="/mybagofdiscs" id="menuTitle">
                      Create and View Bag
                    </NavbarBrand>
                 
                  </React.Fragment>
                )}
              </Nav>
            </Collapse>
          </Navbar>
          <Switch>
            <React.Fragment>
              <Route path="/"></Route>

              <Route path="/home">
                <JumbotronOne />
                <JumbotronTwo />
                <JumbotronThree />
              </Route>

              <Route path="/createbag">
                <CreateBag />
              </Route>

              <Route path="/mybagofdiscs">
                <BagviewJumbo getUser={this.state.user} />
              </Route>
            </React.Fragment>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default HeaderMenuNav;