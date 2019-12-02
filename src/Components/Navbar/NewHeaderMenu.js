import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
  // NavLink,
  // UncontrolledDropdown
} from "reactstrap";
import "./HeaderMenu.css";
import LoginModal from "../Modal/UpdatedModal";
import "./HeaderMenu.css";
import AddToBag from "../Bag/Add";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CreateProfile from "../Profile/Profile";
// import { Jumbotron } from "react-bootstrap";
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
                      <Link id="navLinks" to="/"></Link>
                    </NavItem>

                    <NavItem>
                      <Link id="navLinks" to="/home">
                        <button type="button">Home</button>
                      </Link>
                    </NavItem>

                    <NavItem>
                      <Link id="navLinks" to="/profile">
                        <button type="button">Profile</button>
                      </Link>
                    </NavItem>

                    <NavItem>
                      <Link id="navLinks" to="/createbag">
                        <button type="button">Create and View Bag</button>
                      </Link>
                    </NavItem>

                    <NavItem>
                      <Link id="navLinks" to="/adddisc">
                        <button type="button">Add Disc to Bag</button>
                      </Link>
                    </NavItem>

                    <NavItem>
                      <Link id="navLinks" to="/test">
                        <button type="button">View Disc in Bag</button>
                      </Link>
                    </NavItem>
                  </React.Fragment>
                )}
              </Nav>
            </Collapse>
          </Navbar>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <React.Fragment>
              <Route path="/"></Route>

              <Route path="/home">
                <JumbotronOne />
                <JumbotronTwo />
                <JumbotronThree />
              </Route>

              <Route path="/profile">
                <CreateProfile
                  user={this.props.user}
                  token={this.props.token}
                  profile={this.props.profile}
                />
              </Route>

              <Route path="/createbag">
                <CreateBag />
              </Route>

              <Route path="/adddisc">
                <AddToBag />
              </Route>

              <Route path="/test">
                <BagviewJumbo getUser={this.state.user} />
              </Route>
            </React.Fragment>
          </Switch>
        </div>
      </Router>

      // <div>
      //   <Navbar id="navBarBackground" light expand="md">
      //     <NavbarBrand href="/" id="webSiteTitle">
      //       BangAChain
      //     </NavbarBrand>
      //     <NavbarToggler onClick={this.updateState} />
      //     <Collapse isOpen={this.state.isOpen} navbar>
      //       <Nav className="ml-auto" navbar>
      //         <NavItem>
      //           <NavLink id="navLinks" href="/components/">
      //             Home
      //           </NavLink>
      //           {!this.props.parentState.token ? (
      //             <span></span>
      //           ) : (
      //             <React.Fragment>
      //               <NavLink id="navLinks" href="/">
      //                 Profile
      //               </NavLink>
      //               <NavLink id="navLinks" href="/">
      //                 My Bag
      //               </NavLink>
      //             </React.Fragment>
      //           )}

      //         </NavItem>
      //         <NavItem>
      //           <NavLink
      //             id="navLinks"
      //             href="https://github.com/reactstrap/reactstrap"
      //           >
      //             GitHub
      //           </NavLink>
      //         </NavItem>
      //         <UncontrolledDropdown nav inNavbar>
      //         </UncontrolledDropdown>
      //       </Nav>
      //     </Collapse>
      //   </Navbar>
      // </div>
    );
  }
}

export default HeaderMenuNav;
