import React from "react";
import Header from "../components/Layout/Header/Header";
import Footer from "../components/Layout/Footer/Footer";
import Cart from "../components/Cart/Cart";
import CartProvider from "../context/CartProvider";
const CartPage = () => {
  return (
    <>
      <Cart />
    </>
  );
};

export default CartPage;
