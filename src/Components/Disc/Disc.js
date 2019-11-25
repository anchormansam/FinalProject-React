import React from "react";
import "./Disc.css";
import axios from "axios";

export default class CreateDisc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      discInfo: {
        name: "",
        speed: "",
        turn: "",
        fade: "",
        glide: ""
      },
      brands: [],
      plastics: [],
      admin: false
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.brandRetrieve = this.brandRetrieve.bind(this);
    this.plasticRetrieve = this.plasticRetrieve.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState(prevState => ({
      discInfo: {
        ...prevState.discInfo,
        [name]: value
      }
    }));
  }
  componentDidMount() {
    this.brandRetrieve();
    this.plasticRetrieve();
  }
  brandRetrieve() {
    axios.get("http://127.0.0.1:8000/api/brand").then(res => {
      console.log('brand', res);
      const d = res.data.data;
      this.setState({ brands: d.brands });
    });
  }

  plasticRetrieve() {
    axios.get("http://127.0.0.1:8000/api/plastic").then(res => {
      console.log('plastic', res);
      const d = res.data.data;
      this.setState({ plastics: d.plastics});
    });
  }

  async handleClick(event) {
    var config = {
      headers: {
        Authorization: "Bearer " + this.props.token
      }
    };
    await axios.post("http://127.0.0.1:8000/api/disc", this.state.profileInfo, config).then(res => {
      console.log('discdata', res);
      const d = res.data.data;
      this.setState(prevState => ({
        discInfo: {
          ...prevState.discInfo,
          brand_id: d.disc.brand_id,
          plastic_id: d.disc.plastic_id
        }
      }));
    });
  }
  render() {
    return (
      <div id="container">
        Input Disc Data
        <form>
          <select name="discs" dropdown="true">
            {this.state.brands
              ? this.state.brands.map((item, key) => (
                  <option value="list" key={key}>
                    {item.brand}
                  </option>
                ))
              : null}
          </select>
          <br />
          <select name="plastics" multiple>
            {this.state.plastics
              ? this.state.plastics.map((item, key) => (
                  <option value="list" key={key}>
                    {item.plastic}
                  </option>
                ))
              : null}
          </select>
          <p>
            Hold down the Ctrl (windows) / Command (Mac) button to select
            multiple options.
          </p>
          <label>
            Name:
            <input name="Name" type="input" onChange={this.handleInputChange} />
          </label>
          <br />
          <label>
            Speed:
            <input
              name="speed"
              type="input"
              onChange={this.handleInputChange}
            />
          </label>
          <br />
          <label>
            Turn:
            <input name="turn" type="input" onChange={this.handleInputChange} />
          </label>
          <br />
          <label>
            Fade:
            <input name="fade" type="input" onChange={this.handleInputChange} />
          </label>
          <br />
          <label>
            Glide:
            <input
              name="glide"
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
