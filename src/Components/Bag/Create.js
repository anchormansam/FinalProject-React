import React from "react";
import "./Add.css";
import axios from "axios";

export default class CreateBag extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
         name: "",
         user_id: "",
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
    
        this.setState({[name]:value});
      }

    async handleClick(event) {
        event.preventDefault();
        var userData = JSON.parse(localStorage.getItem("user"));
        
        var config = {
              headers: {
                Authorization: "Bearer " + this.props.token
              }
            };
            var discBagged = {
                name: this.state.name,
                user_id: userData.id,
            }
            console.log(discBagged);
            await axios.post("http://127.0.0.1:8000/api/mybag", discBagged, config).then(res => {
                
            });
        };

        render() {
            return (
            <form onSubmit={(e) => this.handleClick(e)}>
                <label>
                    Name:
                <input 
                  name="name" 
                  type="input" 
                  onChange={this.handleInputChange}
                  />
                </label>
                    <button type="submit" >Create Bag</button>
            </form>
            );
        }

}