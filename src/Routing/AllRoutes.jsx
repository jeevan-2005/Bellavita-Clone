import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Cart from "../Pages/cart/Cart";
import Products from "../Pages/Products/Products";
import CheckOutShipping from "../Pages/checkOut/CheckOutShipping";
import CheckOutPaymentPage from "../Pages/checkOut/CheckOutPaymentPage";
import CheckOutPaymentSuccess from "../Pages/checkOut/CheckOutPaymentSuccess";
import ProtectedComponent from "../Components/protectedComponent/ProtectedComponent";
import SingleProduct from "../Pages/singleProduct/SingleProduct";
import SignUp from "../Pages/signUp/SignUp";

const AllRoutes = () => {
  
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signUp" element={<SignUp />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:id" element={<ProtectedComponent><SingleProduct/></ProtectedComponent>} />
      <Route path="/cart/checkOut:shippingAddress" element={<ProtectedComponent><CheckOutShipping /></ProtectedComponent>} />
      <Route path="/cart/checkOut:paymentPage" element={<ProtectedComponent><CheckOutPaymentPage /></ProtectedComponent>} />
      <Route path="/cart/checkOut:paymentSuccess" element={<ProtectedComponent><CheckOutPaymentSuccess /></ProtectedComponent>} />
    </Routes>
  );
};

export default AllRoutes;
