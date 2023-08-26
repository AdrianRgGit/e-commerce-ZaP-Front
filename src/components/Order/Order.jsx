import React from "react";
import { OrderProvider } from "../../context/OrderContext/OrderState";
import GetUserOrders from "./GetUserOrders/GetUserOrders";

const Order = () => {
  return (
    <>
      <BrowserRouter>
        <OrderProvider>
          <Routes>
            <Route path="/getuserorders" element={<GetUserOrders />} />
          </Routes>
        </OrderProvider>
      </BrowserRouter>
    </>
  );
};

export default Order;
