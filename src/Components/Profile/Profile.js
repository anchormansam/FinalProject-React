import React from "react";
import "./Profile.css";
import axios from "axios";

export default class CreateProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profileInfo: {
        user_id: "",
        address: "",
        city: "",
        state: "",
        zip_code: ""
      },
      admin: false
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
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

  async handleClick(event) {
    var config = {
      headers: {
        Authorization: "Bearer " + this.props.token
      }
    };
    await axios

      .post(
        "https://bangachain.appspot.com/api/profile",
        this.state.profileInfo,
        config
      )
      .then(res => {
        this.setState(prevState => ({
          profileInfo: {
            ...prevState.profileInfo
          }
        }));
      });
  }

  componentDidMount() {
    this.setState({ profileInfo: JSON.parse(localStorage.getItem("profile")) });
  }

  render() {
    return (
      <div id="container">
        Create Your Profile
        <form>
          <label>
            Address:
            <input
              name="address"
              type="input"
              onChange={this.handleInputChange}
            />
          </label>
          <br />
          <label>
            City:
            <input name="city" type="input" onChange={this.handleInputChange} />
          </label>
          <br />
          <label>
            State:
            <input
              name="state"
              type="input"
              onChange={this.handleInputChange}
            />
          </label>
          <br />
          <label>
            Zip Code:
            <input
              name="zip_code"
              type="input"
              onChange={this.handleInputChange}
            />
          </label>
          <br />
          <button onClick={e => this.handleClick(e)}>Submit</button>
        </form>
      </div>
    );
  }
}
