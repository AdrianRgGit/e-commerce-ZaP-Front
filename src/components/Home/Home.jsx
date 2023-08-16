import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ProductProvider } from "../../context/ProductContext/ProductState";
import Products from "./Products/Products";

const Home = () => {
  return (
    <>
      <BrowserRouter>
        <ProductProvider>
          <Routes>
            <Route path="/" element={<Products />} />
          </Routes>
        </ProductProvider>
      </BrowserRouter>
    </>
  );
};

export default Home;
