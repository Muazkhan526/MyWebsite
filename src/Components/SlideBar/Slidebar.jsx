import React from 'react';
import './Slider.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import pic2 from "/src/assets/pic2.png"
import pic3 from "/src/assets/pic3.png"
import pic4 from "/src/assets/pic4.png"

function Slider() {
  return (
    <div className="slider">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={pic2}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={pic3}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={pic4}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Slider;
