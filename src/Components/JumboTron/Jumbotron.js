import React from "react";
import {Container,Row, Col} from 'react-bootstrap'
import "./Jumbotron.css";
import InfoTable from "../Table/Table";

class JumbotronOne extends React.Component {
  render() {
    return (
        <div className="jumbotron">
            
            
                <h1>Lets Build a Bag!</h1>
       
                 
        
      <Container>
        <Row>
          <Col>
            <InfoTable />
          </Col>
          <Col>
          <iframe 
            title="video"
            width="560" 
            height="315" 
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
