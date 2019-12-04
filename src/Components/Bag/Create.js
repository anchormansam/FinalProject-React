import React from "react";
import "./Add.css";
import axios from "axios";
import {
  Col,
  Card,
  Button,
  CardHeader,
  CardFooter,
  CardBody,
  CardTitle,
  CardText,
  Row
} from "reactstrap";

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
      .get("https://bangachain.appspot.com/api/deletedbag/" + event.target.id)
      .then(res => {
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
    await axios
      .post("https://bangachain.appspot.com/api/mybag", discBagged, config)
      .then(res => {
        this.bagRetrieve();
      });
  }

  async bagRetrieve() {
    var userData = JSON.parse(localStorage.getItem("user"));

    await axios

      .get("https://bangachain.appspot.com/api/mybag/" + userData.id)
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

        <Row>
          {this.state.mybags
            ? this.state.mybags.map((item, idx) => (
                <Col sm={2}>
                  <Card key={idx}>
                    <CardHeader className="text-center" tag="h3">
                      Bag Created
                    </CardHeader>
                    <CardBody>
                      <CardTitle className="text-center" tag="h2">
                        {item.name}
                      </CardTitle>
                      <CardText className="text-center">
                        <img
                          src="./images/bag.png"
                          alt="disc golf bag"
                          height="100"
                          width="100"
                        />
                      </CardText>
                    </CardBody>
                    <CardFooter className="text-muted">
                      <button
                        id={item.id}
                        className="text-dark"
                        onClick={this.handleRemoveItem}
                      >
                        Remove
                      </button>
                      <button id={item.id} className="text-dark">
                        Coming Soon
                      </button>
                    </CardFooter>
                  </Card>
                </Col>
              ))
            : "Please Create a Bag"}
        </Row>
      </React.Fragment>
    );
  }
}
