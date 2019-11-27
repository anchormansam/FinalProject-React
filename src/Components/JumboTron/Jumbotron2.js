import React from "react";
import {Container,Row, Col} from 'react-bootstrap'
import "./Jumbotron2.css";


class JumbotronTwo extends React.Component {
  render() {
    return (
        <div className="jumbotronTwo">
     
      <Container>
        <Row>
          <Col>
            <img src={'./images/blackhole.jpg'} alt="boohoo" className="img-responsive"/>
          </Col>
          <Col>
            <img src={''} alt="boohoo" className="img-responsive"/>
          </Col>
          <Col>
            <img src={''} alt="boohoo" className="img-responsive"/>
          </Col>
        </Row>
      </Container>
        </div>
    );
  }
}

export default JumbotronTwo;