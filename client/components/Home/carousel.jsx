import React from 'react';
import Carousel from 'react-bootstrap/lib/Carousel';

class carouselInstance extends React.Component {
  
  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <img width={900} height={500} alt="900x500" src="./assets/diningTable2.jpg"/>
          <Carousel.Caption>
            <h1>Welcome to ChefCasa</h1>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={900} height={500} alt="900x500" src="./assets/diningTable1.jpeg"/>
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={900} height={500} alt="900x500" src="./assets/diningTable.jpeg"/>
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}


module.exports = carouselInstance;