import React from "react";
import { RxHeart } from "react-icons/rx";

const Button_favorite = () => {
  return (
    <button className="bg-[#f3f3f3] border border-black rounded-sm flex items-center justify-center py-3 px-6 gap-2 font-semibold text-sm hover:bg-black hover:text-white">
      <RxHeart size={16} /> DODAJ DO SCHOWKA
    </button>
  );
};

export default Button_favorite;
