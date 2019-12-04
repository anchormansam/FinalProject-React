import React from 'react';
import ApiCall from './ApiCall';

function Carousel(props) {
  let name = `carouselExampleIndicators${props.menuType}`;
  let id = `#${name}`;
  return (
    <div id="carousel" className="carousel slide" data-ride="carousel">
      <ol className="carousel-indicators">
      </ol>
        <div className="carousel-inner">
          
        </div>
      <a className="carousel-control-prev" href={ id } role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href={ id } role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>

  )
};

export default Carousel; 
