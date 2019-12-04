import React from "react";
import {Container,Row, Col} from 'react-bootstrap'
import "./Jumbotron.css";
import InfoTable from "../Table/Table";

class JumbotronOne extends React.Component {
  render() {
    return (
        <div className="jumbotron">
      <Container>
       
          <p id="headerTitle" className="text-center">LETS BUILD A BAG!</p>
      
  
        <Row>
          <Col lg={6} md={10}>
            <InfoTable />
          </Col>
          <Col lg={6} md={5}>
          <iframe 
            id="youtube"
            title="video" 
            position="relative"
            src="https://www.youtube.com/embed/CUbsRc9zlnM" 
            frameborder="0" 
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>
          </iframe>
          </Col>
        </Row>
      </Container>
        </div>
    );
  }
}

export default JumbotronOne;
