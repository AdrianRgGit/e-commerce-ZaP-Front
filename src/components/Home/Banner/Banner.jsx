import { Carousel } from "antd";
import React from "react";
import "./Banner.scss";

function Banner() {
  return (
    <Carousel autoplay className="carousel-container">
      <div className="img-container-carousel">
        <img
          className="img-carousel"
          src="https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2012&q=80"
          alt="zap_logo"
        />
      </div>
      <div className="img-container-carousel">
        <img
          className="img-carousel"
          src="https://images.unsplash.com/photo-1511556532299-8f662fc26c06?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="zap_logo"
        />
      </div>
      <div className="img-container-carousel">
        <img
          className="img-carousel"
          src="https://images.unsplash.com/photo-1542219550-37153d387c27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="zap_logo"
        />
      </div>
      <div className="img-container-carousel">
        <img
          className="img-carousel"
          src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1925&q=80"
          alt="zap_logo"
        />
      </div>
    </Carousel>
  );
}

export default Banner;
