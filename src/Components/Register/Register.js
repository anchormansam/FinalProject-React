
import React from "react";
import "./Register.css";
import axios from "axios";

export default class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          name: '',
          email: '',
          password: '',
          password_verify: '',
        }
    }

    handleClick(event){
        axios
      .post("http://127.0.0.1:8000/api/register", this.state)
      .then(res => {
        const d = res.data.data;

        
        this.setState({
          token: d.token,
          email: d.email,
          password: d.password
        });

        
        localStorage.setItem("token", JSON.stringify(this.state.token));
        localStorage.setItem("email", JSON.stringify(this.state.email));
        localStorage.setItem("password", JSON.stringify(this.state.password));
        this.props.something(d.token);
      });
      
    event.preventDefault();
    }
    render() {
        return (
            <div id="container">
                Registration goes here
              <form>
                <label>
                  Name:
                  <input
                    name="email"
                    type="input"
                    onChange = {(event, newValue) => this.setState({name: newValue})} 
                  />
                </label>
                <br />
                <label>
                  Email:
                  <input
                    name="email"
                    type="input"
                    onChange = {(event, newValue) => this.setState({email: newValue})} 
                  />
                </label>
                <br />
                <label>
                  Password:
                  <input
                    name="password"
                    type="input"
                    onChange={(event, newValue) => this.setState({password: newValue})} 
                  />
                </label>
                <label>
                  Password Verify:
                  <input
                    name="password"
                    type="input"
                    onChange={(event, newValue) => this.setState({password_verify: newValue})} 
                  />
                </label>
                <button onClick={e => this.handleClick(e)}>Register</button>
              </form>
            </div>
          );
        }
}