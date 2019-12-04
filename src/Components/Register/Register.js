
import React from "react";
import "./Register.css";
import axios from "axios";

export default class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          credentials: {
            email:'',
            password:'',
            name:'',
          },
          token: '',
          user: null,
        }
        this.handleInputChange = this.handleInputChange.bind(this);
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

    handleClick(event){
        axios
      // .post("http://127.0.0.1:8000/api/register_new", this.state.credentials)
      .post("https://bangachain.appspot.com/api/register_new", this.state.credentials)
      .then(res => {
        const d = res.data.data;

        this.setState({
          token: d.token,
          user: d.user, 
        });

        
        localStorage.setItem("token", JSON.stringify(this.state.token));
        localStorage.setItem("name", JSON.stringify(this.state.credentials.name));
        localStorage.setItem("user", JSON.stringify(this.state.user));
        localStorage.setItem("email", JSON.stringify(this.state.credentials.email));
        localStorage.setItem("password", JSON.stringify(this.state.credentials.password));
        this.props.setToken(d.token);
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
                    name="name"
                    type="input"
                    onChange = {this.handleInputChange} 
                  />
                </label>
                <br />
                <label>
                  Email:
                  <input
                    name="email"
                    type="input"
                    onChange = {this.handleInputChange} 
                  />
                </label>
                <br />
                <label>
                  Password:
                  <input
                    name="password"
                    type="input"
                    onChange= {this.handleInputChange} 
                  />
                </label>
                <label>
                  Password Verify:
                  <input
                    name="password_verify"
                    type="input" 
                  />
                </label>
                <button onClick={e => this.handleClick(e)}>Register</button>
              </form>
            </div>
          );
        }
}