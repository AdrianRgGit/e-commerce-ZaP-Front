import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";

import { UserProvider } from "./context/UserContext/UserState";
// import Users from "./components/Users/Users";
import Home from "./components/Home/Home";
import Login from "./components/Users/Login/Login";
import Logout from "./components/Users/Logout/Logout";
import Header from "./components/Header/Header";
import SignUp from "./components/Users/SignUp/SignUp";
import { ProductProvider } from "./context/ProductContext/ProductState";
import Products from "./components/Home/Products/Products";

function App() {
  return (
    <>
      <BrowserRouter>
        <UserProvider>
          <ProductProvider>
            {/* Header */}
            <Header />

            {/* Home */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/" element={<Products />} />
            </Routes>

            {/* Users */}
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/logout" element={<Logout />} />
              <Route path="/signup" element={<SignUp />} />
            </Routes>
          </ProductProvider>
        </UserProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
