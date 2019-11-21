import React from "react";
import "./App.css";
// import HeaderMenu from "./Components/Navbar/HeaderMenu";
import Register from "./Components/Register/Register";
import Login from "./Components/Login/Login";
import Logout from "./Components/Logout/Logout";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      token: "",
      toggleLogin: true
    };
    this.setTokenState = this.setTokenState.bind(this);
    this.getToken = this.getToken.bind(this);
    this.setLogin = this.setLogin.bind(this);
  }

  setTokenState(token) {
    this.setState({ token: token });
  }
  setLogin(){
    this.setState({ toggleLogin: !this.state.toggleLogin });

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
      // <HeaderMenu token={this.state.token} setToken={this.setTokenState} />
      <React.Fragment>
        {!this.state.token ? (
          <>
           {this.state.toggleLogin ? <Login setToken={this.setTokenState} />
            :<Register />}
            <button onClick={this.setLogin}>login/register</button>
          </>
        ) : (
          <Logout setToken={this.setTokenState} token={this.props.token} />
        )}
      </React.Fragment>
    );
  }
}

export default App;
