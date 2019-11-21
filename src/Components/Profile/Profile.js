import React from "react";
import "./Profile.css";
import axios from "axios";

export default class CreateProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          profileInfo: {
            user_id:this.props.user_id,
            name:'',
            address:'',
            city:'',
            state:'',
            zip_code:'',
          },
          admin: false,

      
        }
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
      const target = event.target;
      const value = target.value;
      const name = target.name;
  
      this.setState(prevState => ({
        profileInfo: {
          ...prevState.profileInfo,
          [name]: value
        }
      }));
    }

    handleClick(event){
        var config = {
            headers: {
                'Authorization': 'Bearer ' + this.props.token
            },
            body: this.state.profileInfo
        }
        axios
      .post("http://127.0.0.1:8000/api/profile", config)
      .then(res => {
        const d = res.data.data;

        this.setState({
          token: d.token,
        //   user: d.user, 
        });
        // this.props.setToken(d.token);
      });
    }
      render() {
        return (
            <div id="container">
                Create Your Profile
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
                  Address:
                  <input
                    name="address"
                    type="input"
                    onChange = {this.handleInputChange} 
                  />
                </label>
                <br />
                <label>
                  City:
                  <input
                    name="city"
                    type="input"
                    onChange = {this.handleInputChange} 
                  />
                </label>
                <br />
                <label>
                  State:
                  <input
                    name="state"
                    type="input"
                    onChange = {this.handleInputChange} 
                  />
                </label>
                <br />
                <label>
                  Zip Code:
                  <input
                    name="zip_code"
                    type="input"
                    onChange = {this.handleInputChange} 
                  />
                </label>
                <br />
               <button onClick={e => this.handleClick(e)}>Submit</button>
              </form>
            </div>
          );
        };
    }
