import React from "react";
import { HiOutlineShoppingBag } from "react-icons/hi";

const Button_buy = () => {
  return (
    <button className="bg-[#f4811f] text-white rounded-sm flex items-center justify-center gap-2 px-6 py-2 font-semibold hover:bg-[#c96c1a] ">
      <HiOutlineShoppingBag size={22} /> DODAJ DO KOSZYKA
    </button>
  );
};

export default Button_buy;
