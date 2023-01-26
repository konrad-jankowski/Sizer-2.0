import React from "react";
import { BsSearch } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";

const Navbar_search = ({ setSearch }) => {
  return (
    <div className="w-full h-full flex justify-between items-center tuptril">
      <BsSearch size={25} fill={"#9ca3af"} />
      <input
        className="w-full h-full text-3xl text-gray-400 uppercase font-semibold pl-4 outline-none placeholder:text-gray-500"
        type="text"
        placeholder="SZUKAJ W SKLEPIE..."
        required
      />
      <AiOutlineClose
        fill="#9ca3af"
        size={28}
        className="cursor-pointer"
        onClick={() => setSearch(false)}
      />
    </div>
  );
};

export default Navbar_search;
