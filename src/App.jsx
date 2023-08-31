import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";

import { UserProvider } from "./context/UserContext/UserState";
import { ProductProvider } from "./context/ProductContext/ProductState";
import { OrderProvider } from "./context/OrderContext/OrderState";

import Home from "./components/Home/Home";
import Login from "./components/Users/Login/Login";
import Logout from "./components/Users/Logout/Logout";
import SignUp from "./components/Users/SignUp/SignUp";

import Header from "./components/Header/Header";
import Cart from "./components/Cart/Cart";
import UserInfo from "./components/Users/UserInfo/UserInfo";

function App() {
  return (
    <>
      <BrowserRouter>
        <UserProvider>
          <ProductProvider>
            <OrderProvider>
              {/* Header */}
              <Header />

              {/* Home */}
              <Routes>
                <Route path="/" element={<Home />} />
              </Routes>

              {/* Users */}
              <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<Logout />} />
                <Route path="/profile" element={<UserInfo />} />
                <Route path="/signup" element={<SignUp />} />
              </Routes>

              {/* Products */}
              <Routes>
                <Route path="/cart" element={<Cart />} />
              </Routes>
            </OrderProvider>
          </ProductProvider>
        </UserProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
