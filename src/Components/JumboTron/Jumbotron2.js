import React from "react";
import { Row, Col, } from "react-bootstrap";
import "./Jumbotron2.css";


class JumbotronTwo extends React.Component {
  render() {
    return (
       
      <Row>
       <Col lg={3} md={6} sm={12} >
       <img src="./images/basketupdatecopy.jpg" className="mx-auto" alt="Smiley face" width="100%"/>
       </Col>
       <Col lg={3} md={6} sm={12} >
       <img src="./images/DDupdated.jpg" className="mx-auto" alt="Smiley face" width="100%" />
       </Col>
       <Col lg={3} md={6} sm={12} >
       <img src="./images/flightupdate.jpg" className="mx-auto" alt="Smiley face" width="100%" />
       </Col>
       <Col lg={3} md={6} sm={12} >
       <img src="./images/basketupdatecopy.jpg"className="mx-auto" alt="Smiley face" width="100%" />
       </Col>
      </Row>
    );
  }
}

export default JumbotronTwo;
