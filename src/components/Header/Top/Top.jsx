import React from "react";
import "./Top.scss";
import { Space } from "antd";
import Search from "antd/es/input/Search";

const Top = () => {
  return (
    <>
      <header id="top-container">
        <figure className="logo">
          <img src="../../../assets/img/ZaP_logo.jpg" alt="zap_logo" />
        </figure>

        <div className="search-container">
          <Search className="search-input" placeholder="Search" />
        </div>
      </header>
    </>
  );
};

export default Top;
