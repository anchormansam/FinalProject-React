import React from "react";
import "./App.css";
import HeaderMenuNav from "./Components/Navbar/NewHeaderMenu";


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
    this.setToken = this.setToken.bind(this);
    this.setLogin = this.setLogin.bind(this);
  }

  setSession(token, user, profile) {
    this.setState({
      token: token,
      user: user,
      profile: profile
    });
  }
  setLogin() {
    this.setState({ toggleLogin: !this.state.toggleLogin });
  }

  setToken() {
    var tokenKey = localStorage.getItem("token");
    var userData = localStorage.getItem("user");
    var userProfile = localStorage.getItem("userProfile");

    if (tokenKey && tokenKey.length > 0) {
      tokenKey = JSON.parse(tokenKey);
    } else {
      localStorage.setItem("token", JSON.stringify(""));
      tokenKey = JSON.parse(localStorage.getItem("token"));
    }

    if (userData && userData.length > 0) {
      userData = JSON.parse(userData);
    } else {
      localStorage.setItem("user", JSON.stringify(""));
      userData = JSON.parse(localStorage.getItem("user"));
    }

    if (userProfile && userProfile.length > 0) {
      userProfile = JSON.parse(userProfile);
    } else {
      localStorage.setItem("userProfile", JSON.stringify(""));
      userProfile = JSON.parse(localStorage.getItem("userProfile"));
    }

    this.setSession(tokenKey, userData, userProfile);
  }
  componentDidMount(){
    this.setToken();
  }

  render() {
    return (
      <React.Fragment>

        <HeaderMenuNav
          setSession={this.setSession}
          setLogin={this.setLogin}
          setToken={this.setToken}
          parentState={this.state}
          user={this.state.user}
          token={this.state.token}
          profile={this.state.profile}
        />
      </React.Fragment>
    );
  }
}

export default App;
