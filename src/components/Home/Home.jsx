import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ProductProvider } from "../../context/ProductContext/ProductState";
import Products from "./Products/Products";
import Banner from "./Banner/Banner";
import SortBar from "./SortBar/SortBar";

const Home = () => {
  return (
    <>
      <Banner />
      <SortBar />
      <Products />
    </>
  );
};

export default Home;
