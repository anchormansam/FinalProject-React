import React from "react";
import "./Add.css";
import axios from "axios";

export default class AddToBag extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brands: [],
      plastics: [],
      discs: [],
      mybags: [],
      user_id: "",
      mybags_id: "",
      discs_id: "",
      selectedDisc: "",
      selectedBrand: "",
      selectedPlastic: "",
      selectedBag: ""
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.brandsRetrieve = this.brandsRetrieve.bind(this);
    this.plasticsRetrieve = this.plasticsRetrieve.bind(this);
    this.discsRetrieve = this.discsRetrieve.bind(this);
    this.bagRetrieve = this.bagRetrieve.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  componentDidMount() {
    this.brandsRetrieve();
    this.plasticsRetrieve();
    this.discsRetrieve();
    this.bagRetrieve();
  }

  async brandsRetrieve() {
    await axios.get("http://127.0.0.1:8000/api/brand").then(res => {
      const d = res.data.data;
      if (!res) {
        return "Error";
      } else {
        this.setState({
          brands: d.brands
        });
        return res;
      }
    });
  }

  async plasticsRetrieve() {
    await axios.get("http://127.0.0.1:8000/api/plastic").then(res => {
      console.log( 'plastic', res)
      const d = res.data.data;
      if (!res) {
        return "Error";
      } else {
        this.setState({plastics: d.plastics });
        console.log('plastics.d' , d.plastics)
        return res;
      }
    });
  }

  async discsRetrieve() {
    await axios.get("http://127.0.0.1:8000/api/disc").then(res => {
      const d = res.data;
      if (!res) {
        return "Error";
      } else {
        this.setState({discs: d });
        return res;
      }
    });
  }

  async bagRetrieve() {
    var userData = JSON.parse(localStorage.getItem("user"));

    await axios
      .get("http://127.0.0.1:8000/api/mybag/" + userData.id)
      .then(res => {
        const d = res.data;
        if (!res) {
          return "Error";
        } else {
          this.setState({ mybags: d });

          return res;
        }
      });
  }

  async handleClick(event) {
    var config = {
      headers: {
        Authorization: "Bearer " + this.props.token
      }
    };

    var userData = JSON.parse(localStorage.getItem("user"));

    var discBagged = {
      user_id: userData.id,
      mybags_id: this.state.selectedBag,
      discs_id: this.state.selectedDisc
    };
    await axios
      .post("http://127.0.0.1:8000/api/mybagofdiscs", discBagged, config)
      .then(res => {
        if (!res) {
          return "Error";
        }
        this.setState({ discBagged });
        return res;
      });
  }

  render() {
    return (
      <div id="container">
        <form onSubmit={e => this.handleClick(e)}>
          <select name="selectedBrand" onChange={this.handleInputChange}>
            <option value={this.state.brands} disabled selected>
              Select Brand
            </option>

            {this.state.brands
              ? this.state.brands.map((item, key) => (
                  <option value={item.id} key={key}>
                    {item.brand}
                  </option>
                ))
              : null}
          </select>
          <br />
          <select name="selectedPlastic" onChange={this.handleInputChange}>
            <option value={this.state.plastics} disabled selected>
              Select Plastic
            </option>
            {this.state.plastics
              ? this.state.plastics.map((item, key) => {
                return (
                  String(this.state.selectedBrand) === String(item.brand_id) ?
                    <option value={item.id} key={key}>
                      {item.plastic}
                    </option>:
                    null
                  );
                })
              : null}
          </select>
          <br />
          <select name="selectedDisc" onChange={this.handleInputChange}>
            <option value={this.state.discs} disabled selected>
              Select Disc
            </option>
            {this.state.discs
              ? this.state.discs.map((item, key) => (
                  <option value={item.id} key={key}>
                    {item.name}
                  </option>
                ))
              : null}
          </select>
          <br />
          <select name="selectedBag" onChange={this.handleInputChange}>
            <option value={this.state.mybags} disabled selected>
              Select Bag
            </option>
            {this.state.mybags
              ? this.state.mybags.map((item, key) => (
                  <option value={item.id} key={key}>
                    {item.name}
                  </option>
                ))
              : null}
          </select>
          <button type="submit">Add to Bag</button>
        </form>
      </div>
    );
  }
}
