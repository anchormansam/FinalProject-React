import React from "react";
import { MDBDataTable } from "mdbreact";
import axios from "axios";
 

export default class BagTable extends React.Component {
  constructor() {
    super();
    this.state = {
      bagName: "",
      brand: "",
      discName: "",
      plastic: "",
      speed: "",
      fade: "",
      turn: "",
      glide: "",
      remove: ""
    };
    this.getTableData = this.getTableData.bind(this);
    this.createBagTable = this.createBagTable.bind(this);
  }
  getTableData() {
    axios.get("http://127.0.0.1:8000/api/mybag").then(res => {
      const d = res.data.data;
      this.setState({
        bagName: d.bagName,
        brand: d.brand,
        discName: d.discName,
        plastic: d.plastic,
        speed: d.speed,
        fade: d.fade,
        turn: d.turn,
        glide: d.glide,
      });
    });
  }

  createBagTable() {
    const data = {
      columns: [
        {
          label: "Bag Name",
          field: "bagName",
          sort: "asc",
          width: 100
        },
        {
          label: "Brand",
          field: "brand",
          sort: "asc",
          width: 100
        },
        {
          label: "Disc Name",
          field: "discName",
          sort: "asc",
          width: 100
        },
        {
          label: "Plastic",
          field: "plastic",
          sort: "asc",
          width: 100
        },
        {
          label: "Speed",
          field: "speed",
          sort: "asc",
          width: 10
        },
        {
          label: "Turn",
          field: "turn",
          sort: "asc",
          width: 10
        },
        {
          label: "Fade",
          field: "fade",
          sort: "asc",
          width: 10
        },
        {
          label: "Glide",
          field: "glide",
          sort: "asc",
          width: 10
        },
        {
          label: "Remove",
          field: "remove",
          sort: "asc",
          width: 10
        }
      ],
      rows: [
        {
          bagName: "Tiger Nixon",
          brand: "System Architect",
          discName: "Edinburgh",
          plastic: "61",
          speed: "12",
          fade: "$2",
          turn: "$2",
          glide: "$2",
          remove: "maybe"
        }
      ]
    };
  }

  render() {
    return <MDBDataTable striped bordered small data={this.state} />;
  }
}
