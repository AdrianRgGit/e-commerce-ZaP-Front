import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";

import { UserProvider } from "./context/UserContext/UserState";
import { ProductProvider } from "./context/ProductContext/ProductState";
import { OrderProvider } from "./context/OrderContext/OrderState";

import Users from "./components/Users/Users";
import Home from "./components/Home/Home";
import Login from "./components/Users/Login/Login";
import Logout from "./components/Users/Logout/Logout";
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
                <Route path="/logout" element={<Logout />} />
                <Route path="/profile" element={<UserInfo />} />
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
