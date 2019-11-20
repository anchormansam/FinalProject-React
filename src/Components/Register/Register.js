
import React from "react";
import "./Register.css";
import axios from "axios";

export default class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          username: '',
          password: '',
        }
    }
    render() {
        return (
            <div id="container">
              <form>
                <label>
                  Username:
                  <input
                    name="email"
                    type="input"
                    onChange = {(event, newValue) => this.setState({username: newValue})} 
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
                <button onClick={e => this.handleClick(e)}>Register</button>
              </form>
            </div>
          );
        }
}