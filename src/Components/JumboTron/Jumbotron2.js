import React from "react";
import { Row, Col, Carousel, } from "react-bootstrap";
import "./Jumbotron2.css";
import Image from "react-image-resizer";

class JumbotronTwo extends React.Component {
  render() {
    return (
      // <div className="jumbotronTwo">
       
      <Row>
       <Col lg={3} md={6} sm={12} >
       <img src="./images/basketupdate.jpg" className="mx-auto" alt="Smiley face" width="100%"/>
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
