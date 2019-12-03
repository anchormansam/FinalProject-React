import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import AddToBag from "../Bag/Add";
import BagTable from "../Table/BagTable";

import "./BagviewJumbo.css";


class BagviewJumbo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
     brands: [],
      plastics: [],
      discs: [],
      mybags: [],
    
    }
  }

  

  render() {
    return (
      <div className="BagviewJumbo">
        <Container>
          <Row>

            <Col lg="2" className="width: auto,">
              {/* <AddToBag getUser={this.props.getUser}/> */}
            </Col>
            <Col>
            <BagTable />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default BagviewJumbo;
