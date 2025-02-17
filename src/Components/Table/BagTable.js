import React from "react";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";


import axios from "axios";

export default class BagTable extends React.Component {
  constructor() {
    super();
    this.state = {
      resData: []
    };
    this.getTableData = this.getTableData.bind(this);
    this.handleRemoveItem = this.handleRemoveItem.bind(this);
  }

  async getTableData() {
    var userData = JSON.parse(localStorage.getItem("user"));

    var savedData = {
      resData: this.state.resData
    };

    await axios
      .get("https://bangachain.appspot.com/api/mybagofdiscs/" + userData.id, savedData)
      .then(res => {
        this.setState({
          resData: res.data
        });
      });
  }

  async handleRemoveItem(event) {
    await axios
      .get("https://bangachain.appspot.com/api/deletediscs/" + event.target.id )
      .then(res => {
        this.getTableData();
      });
  }
  
  componentDidMount() {
    this.getTableData();
  }

  render() {
    return (
      <React.Fragment>
          <Table>
        <Thead>
          <Tr>
            <Th>Bag Name</Th>
            <Th>Disc Name</Th>
            <Th>Brand</Th>
            <Th>Plastic</Th>
            <Th>Speed</Th>
            <Th>Turn</Th>
            <Th>Glide</Th>
            <Th>Fade</Th>
            <Th>Remove</Th>
          </Tr>
        </Thead>
        <Tbody>

          {this.state.resData.map((item, idx) => {
            return (
              <Tr key={idx}>
                <Td>{item.mybag.name}</Td>
                <Td>{item.discs.name}</Td>
                <Td>{item.brand[0].brand}</Td>
                <Td>{item.plastic[0].plastic}</Td>
                <Td>{item.discs.speed?item.discs.speed:"0"}</Td>
                <Td>{item.discs.turn?item.discs.turn:"0"}</Td>
                <Td>{item.discs.glide?item.discs.glide:"0"}</Td>
                <Td>{item.discs.fade?item.discs.fade:"0"}</Td>
                <Td><button id={item.discs.id} className="text-dark" onClick={this.handleRemoveItem}>
                Remove
              </button></Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
      </React.Fragment>
    );
  
  }
}
