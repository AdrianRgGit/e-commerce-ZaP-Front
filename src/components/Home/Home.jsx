import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ProductProvider } from "../../context/ProductContext/ProductState";
import Products from "./Products/Products";
import Banner from "./Banner/Banner";

const Home = () => {
  return (
    <>
      <Banner />
      <Products />
    </>
  );
};

export default Home;
