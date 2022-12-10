import React from "react";
import Carousel from "react-bootstrap/Carousel";
import image1 from "../images/STM_wallpaper.jpg";

const Slideshow = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          width={"50%"}
          height={"auto"}
          src={image1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../images/STM_wallpaper.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Slideshow;
