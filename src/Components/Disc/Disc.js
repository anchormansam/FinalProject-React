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
        glide: "",
        brand_id: "",
        plastic_id: "",
      },
      brand: [],
      plastic: [],
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
      const d = res.data.data;
      this.setState({ brands: d.brands });
    });
  }

  plasticRetrieve() {
    axios.get("http://127.0.0.1:8000/api/plastic").then(res => {
      const d = res.data.data;
      this.setState({ plastics: d.plastics}); 
    });
  }

  async handleClick(event) {
    event.preventDefault();

    var config = {
      headers: {
        Authorization: "Bearer " + this.props.token
      }
    };
    var discInfo = {
        name: this.state.discInfo.name,
        speed: this.state.discInfo.speed,
        turn: this.state.discInfo.turn,
        fade: this.state.discInfo.fade,
        glide: this.state.discInfo.glide,
        brand_id: this.state.discInfo.brand_id,
        plastic_id:this.state.discInfo.plastic_id,
      }

    await axios.post("http://127.0.0.1:8000/api/disc", discInfo, config).then(res => {

    });
  }
  
  render() {
    return (
      <div id="container">
        Input Disc Data
        <form onSubmit={(e) => this.handleClick(e)}>
          <select 
            name="brand_id" 
            dropdown=""
            onChange={this.handleInputChange}>
            <option value={this.state.discInfo.brand_id} disabled selected>Select Brand</option>
            {this.state.brands
              ? this.state.brands.map((item, key) => (
                <option value={item.id} key={key}>
                    {item.brand}
                  </option>
                ))
                : null}
          </select>
                
          <br />
          <select 
            name="plastic_id"
            onChange={this.handleInputChange}>
            <option value={this.state.discInfo.plastic_id} disabled selected>Select Plastic</option>
            {this.state.plastics
              ? this.state.plastics.map((item, key) => (
                  <option value={item.id} key={key}>
                    {item.plastic}
                  </option>
                ))
              : null}
          </select>
          <br />
          <label>
            Name:
            <input 
              name="name" 
              type="input" 
              onChange={this.handleInputChange}
              value = {this.state.discInfo.name}
            />
          </label>
          <br />
          <label>
            Speed:
            <input
              name="speed"
              type="input"
              onChange={this.handleInputChange}
              value = {this.state.discInfo.speed}
            />
          </label>
          <br />
          <label>
            Turn:
            <input 
              name="turn" 
              type="input" 
              onChange={this.handleInputChange} 
              value = {this.state.discInfo.turn}
              />
          </label>
          <br />
          <label>
            Fade:
            <input 
            name="fade" 
            type="input" 
            onChange={this.handleInputChange} 
            value = {this.state.discInfo.fade}
            />
          </label>
          <br />
          <label>
            Glide:
            <input
              name="glide"
              type="input"
              onChange={this.handleInputChange}
              value = {this.state.discInfo.glide}
            />
          </label>
          <br />
          <button type="submit" >Submit</button>
        </form>
      </div>
    );
  }
}
