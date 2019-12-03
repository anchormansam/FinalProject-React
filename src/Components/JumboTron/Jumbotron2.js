import React from "react";
import { Row, Col } from "react-bootstrap";
import "./Jumbotron2.css";
import Image from "react-image-resizer";

class JumbotronTwo extends React.Component {
  render() {
    return (
      <div className="jumbotronTwo">
       
          <Row>
            <Col xl={1}>

            </Col>
            <Col xl={3}>
              <div>
                <Image 
                  src="./images/blackhole.jpg" 
                  height={400} 
                  width={400} 
                />
              </div>
            </Col>
            <Col xl={3}>
              <div>
                <Image
                  src="./images/DD.jpeg"
                  height={400}
                  width={400}
                  alt="DynamicDisc"
                  className=""
                />
              </div>
            </Col>
            <Col xl={3}>
            <div>
                <Image
                  src="./images/flight.jpg"
                  height={400}
                  width={400}
                  alt="Innova Flight Numbers"
                  className=""
                />
              </div>
            </Col>
            <Col xl={2}>
              
              </Col>
          </Row>
      
      </div>
    );
  }
}

export default JumbotronTwo;
