import React, { useState } from "react";
import { BiUserCircle } from "react-icons/bi";
import { RxHeart } from "react-icons/rx";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";
import { ToggleAuth } from "../context/ToggleCardContext";

const Navbar = () => {
  const { setToggle } = ToggleAuth();

  return (
    <nav className="flex  w-full h-[14vh]  px-[9%] justify-between items-center bg-white">
      <div>
        <Link to="/">
          <img
            className="w-[160px] h-[50px] object-cover"
            src="https://bm-discounts-prd-app-imageautoresize02.azureedge.net/imageautoresize/v2/L2Rpc2NvdW50cy1waWN0dXJlcy84NzFkNWU2ZC0xYjhiLTQzOTYtYjU2OC03ZmQzYzBmOWU1OTIvNTJjNTgyZWMtMjZmMC00YWU5LTljYWItZjcxZTRiNjUwMjRmLnBuZw2/"
            alt=""
          />
        </Link>
      </div>
      <ul className="flex gap-10 font-semibold text-sm	">
        <li className="hover:text-[#f4811f] cursor-pointer">DAMSKIE</li>
        <li className="hover:text-[#f4811f] cursor-pointer">MĘSKIE</li>
        <li className="hover:text-[#f4811f] cursor-pointer">DZIECIĘCE</li>
        <Link to="/marki">
          <li className="hover:text-[#f4811f] cursor-pointer">MARKI</li>
        </Link>
        <li className="hover:text-[#f4811f] cursor-pointer">SALE</li>
        <li className="hover:text-[#f4811f] cursor-pointer">NOWOŚCI</li>
        <li className="hover:text-[#f4811f] cursor-pointer">STREETWEAR</li>
      </ul>
      <ul className="flex gap-4 text-xs ">
        <li className="flex flex-col items-center gap-1 hover:text-[#f4811f] cursor-pointer ">
          <BiUserCircle size={26} /> ZALOGUJ
        </li>
        <li className="flex flex-col items-center gap-1   hover:text-[#f4811f] cursor-pointer">
          <RxHeart size={26} /> SCHOWEK
        </li>
        <li
          onClick={() => setToggle((prev) => !prev)}
          className="relative flex flex-col items-center gap-1  hover:text-[#f4811f] cursor-pointer"
        >
          <HiOutlineShoppingBag className="relative" size={26} />
          <div className="absolute right-[6px] top-[-5px] bg-gray-300 h-[20px] w-[20px] flex justify-center items-center rounded-full text-xs  ">
            1
          </div>
          KOSZYK
        </li>
        <li className="flex flex-col items-center gap-1 hover:text-[#f4811f] cursor-pointer">
          <BsSearch size={26} />
          SZUKAJ
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
