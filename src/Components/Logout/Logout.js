import React from "react";
import "./Logout.css";
import axios from "axios";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from "reactstrap";

export default class Logout extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    console.log("Mounted logout");
  }

  handleClick(event) {
    console.log("in handle click");
    axios({
      url: "/logout",
      method: "get",
      baseURL: "https://bangachain.appspot.com/api",

      headers: { Authorization: "Bearer " + this.props.token }
    })
      .then(res => {
        console.log("caught response:", res);
        localStorage.clear();
        this.props.setToken("");
      })
      .catch(res => {
        console.log("caught error:", res);
      });
    event.preventDefault();
  }

  render() {
    return (
      <NavbarBrand href="/" to="/" id="logoutTitle" onClick={this.handleClick}>
        Logout
      </NavbarBrand>
    );
  }
}
