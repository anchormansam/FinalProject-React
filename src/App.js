import React from "react";
import "./App.css";
import HeaderMenu from "./Components/Navbar/HeaderMenu";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      token: ""
    };
    this.setTokenState = this.setTokenState.bind(this);
    this.getToken = this.getToken.bind(this);
  }

  setTokenState(token) {
    this.setState({ token: token });
  }

  getToken() {
    var tokenKey = localStorage.getItem("token");
    if (tokenKey && tokenKey.length > 0) {
      tokenKey = JSON.parse(tokenKey);
    } else {
      localStorage.setItem("token", JSON.stringify(""));
      tokenKey = JSON.parse(localStorage.getItem("token"));
    }

    this.setTokenState(tokenKey);
  }

  render() {
    return (
      <HeaderMenu token={this.state.token} setToken={this.setTokenState} />
    );
  }
}

export default App;
