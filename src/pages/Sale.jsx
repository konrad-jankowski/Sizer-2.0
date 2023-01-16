import React from "react";
import Navbar from "../components/Navbar";
import ShoppingCartEmpty from "../components/ShoppingCartEmpty";

const Sale = () => {
  return (
    <>
      <ShoppingCartEmpty />
      <Navbar />
      <h1>WYPRZEDZAŻ</h1>
    </>
  );
};

export default Sale;
