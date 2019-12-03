import React from "react";
import "./Add.css";
import axios from "axios";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";

export default class CreateBag extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      user_id: ""
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleRemoveItem = this.handleRemoveItem.bind(this);
  }
  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({ [name]: value });
  }

  async handleRemoveItem(event) {
    await axios
      .get("http://127.0.0.1:8000/api/deletedbag/" + event.target.id)
      .then(res => {
        console.log("removed", res);
        this.bagRetrieve();
      });
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
      user_id: userData.id
    };
    console.log(discBagged);
    await axios
      .post("http://127.0.0.1:8000/api/mybag", discBagged, config)
      .then(res => {});
  }

  async bagRetrieve() {
    var userData = JSON.parse(localStorage.getItem("user"));

    await axios
      .get("http://127.0.0.1:8000/api/mybag/" + userData.id)
      .then(res => {
        console.log("bag", res);
        const d = res.data;
        if (!res) {
          return "Error";
        } else {
          this.setState({ mybags: d });

          return res;
        }
      });
  }

  componentDidMount() {
    this.bagRetrieve();
  }
  render() {
    return (
      <React.Fragment>
        <form onSubmit={e => this.handleClick(e)}>
          <label>
            Name:
            <input name="name" type="input" onChange={this.handleInputChange} />
          </label>
          <button type="submit">Create Bag</button>
        </form>

        {this.state.mybags
          ? this.state.mybags.map((item, idx) => (
              <ul key={idx}>
                <li>{item.name}</li>
                <button id={item.id} className="text-dark" onClick={this.handleRemoveItem}>
                Remove
              </button>
              </ul>
            ))
          : "Please Create a Bag"}
      </React.Fragment>
    );
  }
}
