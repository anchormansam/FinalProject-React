import React from "react";
import "./Logout.css";
import axios from "axios";

export default class Logout extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    axios({
      url: "/logout",
      method: "get",
      baseURL: "http://127.0.0.1:8000/api",

      headers: { Authorization: "Bearer " + this.props.token }
    }).then(
      res=>{
        console.log("caught response:",res)
      }
    ).catch(
      res=>{
        console.log("caught error:",res)
      }
    );
    localStorage.clear();
    this.props.setToken("");
    event.preventDefault();
  }

  render() {
    return <button onClick={this.handleClick}>Logout</button>;
  }
}
