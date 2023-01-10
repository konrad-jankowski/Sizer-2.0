import React from "react";

const ShoppingCartEmpty_button = ({ text }) => {
  return (
    <button className="border border-black rounded-sm text-lg font-semibold py-[0.6rem] mt-4 hover:underline">
      <h1 className="text-sm font-bold">{text.categoria}</h1>
    </button>
  );
};

export default ShoppingCartEmpty_button;
