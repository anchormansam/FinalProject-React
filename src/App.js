import React from "react";
import "./App.css";
import HeaderMenuNav from "./Components/Navbar/NewHeaderMenu";
import CreateProfile from "./Components/Profile/Profile";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      token: "",
      user: {},
      profile: {},
      user_bag: {},
      toggleLogin: true
    };
    this.setSession = this.setSession.bind(this);
    this.getToken = this.getToken.bind(this);
    this.setLogin = this.setLogin.bind(this);
  }

  setSession(token, user, profile) {
    this.setState({ 
      token: token,
      user: user,
      profile: profile
    });
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

    this.setSession(tokenKey);
  }


  render() {
    return (
      <React.Fragment>
        <HeaderMenuNav setSession={this.setSession} setLogin={this.setLogin} getToken={this.getToken} parentState={this.state}/>
        <CreateProfile token={this.state.token}/>
      
      </React.Fragment>
     )
  }
}

export default App;
