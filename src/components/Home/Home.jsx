import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ProductProvider } from "../../context/ProductContext/ProductState";
import Products from "./Products/Products";

const Home = () => {
  return (
    <>
      <Products />
    </>
  );
};

export default Home;
