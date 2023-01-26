import React from "react";

const Button_favorite = ({ text, icon }) => {
  return (
    <button
      className={`bg-[#f3f3f3] border border-black rounded-sm flex items-center justify-center py-3 px-6 gap-2 font-semibold text-sm hover:bg-black hover:text-white uppercase ${text?.class}`}
    >
      {icon}
      {text?.text}
    </button>
  );
};

export default Button_favorite;
