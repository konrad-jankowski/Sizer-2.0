import React from "react";

const Button_buy = ({ text, icon }) => {
  return (
    <button className="bg-[#f4811f] text-white rounded-sm flex items-center justify-center gap-2 px-6 py-2 font-semibold hover:bg-[#c96c1a] uppercase ">
      {/* <HiOutlineShoppingBag size={22} /> DODAJ DO KOSZYKA */}
      {icon}
      {text.text}
    </button>
  );
};

export default Button_buy;
