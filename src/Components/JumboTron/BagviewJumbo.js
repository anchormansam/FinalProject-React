import React from "react";
import {Container,Row, Col} from 'react-bootstrap'
import "./Bagviewjumbo.css";


class Bagviewjumbo extends React.Component {
  render() {
    return (
        <div className="jumbotronTwo">
     
      <Container>
        <Row>
          <Col>
          {/* insert layout to add disc to bag */}
          </Col>
          <Col>
          {/* insert what disc are in the bag */}
          </Col>
        
        </Row>
      </Container>
        </div>
    );
  }
}

export default Bagviewjumbo;