import { Carousel } from "antd";
import React from "react";
import "./Banner.scss";

function Banner() {
  return (
    <Carousel autoplay className="carousel-container">
      <div className="img-container-carousel">
        <img
          className="img-carousel"
          src="https://workflex.es/wp-content/uploads/2019/10/Zapatilla-valle-marino-2.png"
          alt="zap_logo"
        />
      </div>
      <div className="img-container-carousel">
        <img
          className="img-carousel"
          src="https://workflex.es/wp-content/uploads/2019/10/Zapatilla-valle-marino-2.png"
          alt="zap_logo"
        />
      </div>
      <div className="img-container-carousel">
        <img
          className="img-carousel"
          src="https://workflex.es/wp-content/uploads/2019/10/Zapatilla-valle-marino-2.png"
          alt="zap_logo"
        />
      </div>
      <div className="img-container-carousel">
        <img
          className="img-carousel"
          src="https://workflex.es/wp-content/uploads/2019/10/Zapatilla-valle-marino-2.png"
          alt="zap_logo"
        />
      </div>
    </Carousel>
  );
}

export default Banner;
