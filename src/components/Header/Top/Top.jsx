import React from "react";
import "./Top.scss";
import { Space } from "antd";
import Search from "antd/es/input/Search";

const Top = () => {
  return (
    <>
      <header id="top-container">
        <figure className="logo-container">
          <img
          className="logo"
            src="https://img.freepik.com/vector-premium/diseno-logotipo-tienda-zapatillas-ilustracion-vector-zapatillas-deporte_668007-105.jpg?w=2000"
            alt="zap_logo"
          />
        </figure>

        <div className="search-container">
          <Search className="search-input" placeholder="Search" />
        </div>
      </header>
    </>
  );
};

export default Top;
