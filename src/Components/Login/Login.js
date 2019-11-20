import React from "react";
import "./Login.css";
import axios from "axios";

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      credentials: { email: "", password: "" },
      token: "",
      user: { name: "", email: "" },
      profile: { photo: "" }
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState(prevState => ({
      credentials: {
        ...prevState.credentials,
        [name]: value
      }
    }));
  }

  handleClick(event) {
    axios
      .post("http://127.0.0.1:8000/api/login", this.state.credentials)
      .then(res => {
        const d = res.data.data;

        this.setState({
          token: d.token,
          user: d.user,
          profile: d.user_profile
        });

        localStorage.setItem("token", JSON.stringify(this.state.token));
        localStorage.setItem("user", JSON.stringify(this.state.user));
        localStorage.setItem("profile", JSON.stringify(this.state.profile));
        this.props.setToken(d.token);
      });

    event.preventDefault();
  }

  render() {
    return (
      <div id="container">
        <form>
          <label>
            Email:
            <input
              name="email"
              type="input"
              checked={this.state.isLoggedIn}
              onChange={this.handleInputChange}
            />
          </label>
          <br />
          <label>
            Password:
            <input
              name="password"
              type="input"
              value={this.state.userLoggingIn}
              onChange={this.handleInputChange}
            />
          </label>
         
        </form>
      </div>
    );
  }
}
