import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Slide1 from "../../../images/slide1.jpg";
import Slide2 from "../../../images/slide2.jpg";
import Slide3 from "../../../images/slide3.jpg";

export function CarouselSection() {
  return (
    <div>
      <h2 className="sub__title"> See the city</h2>
      <Carousel className="carousel">
        <Carousel.Item>
          <img className="carousel__img d-block" src={Slide1} alt="slide 1" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="carousel__img d-block" src={Slide2} alt="slide 2" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="carousel__img d-block" src={Slide3} alt="slide 3" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarouselSection;
