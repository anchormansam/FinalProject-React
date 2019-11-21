import React from "react";
import "./App.css";
import HeaderMenuNav from "./Components/Navbar/NewHeaderMenu";


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
    

        <HeaderMenuNav setTokenState={this.setTokenState} setLogin={this.setLogin} getToken={this.getToken} parentState={this.state}/>
        
      
     )
  }
}

export default App;
