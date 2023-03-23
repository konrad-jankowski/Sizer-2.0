import React, { useState } from "react";
import { BiUserCircle } from "react-icons/bi";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { IoMdHeartEmpty } from "react-icons/io";
import { BsSearch } from "react-icons/bs";
import { Link, NavLink } from "react-router-dom";
import { ToggleAuth, useShoppingCart } from "../context/ToggleCardContext";
import Navbar_search from "./Navbar_search";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(true);
  const [search, setSearch] = useState(false);
  const { user } = ToggleAuth();
  const { quantityy } = useShoppingCart();

  const changeNavbar = () => {
    if (window.scrollY >= 80) {
      setIsSticky(false);
    } else {
      setIsSticky(true);
    }
  };

  window.addEventListener("scroll", changeNavbar);

  const { setToggle } = ToggleAuth();

  const onClickHandler = () => {
    setToggle((prev) => !prev);
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };
    scrollToTop();
  };

  return (
    <nav
      className={
        isSticky
          ? "z-10 flex  w-full h-[12vh]  px-[9%] justify-between items-center bg-white "
          : "sticky top-0 shadow-sm shadow-black/40 z-10 flex  w-full h-[10vh]  px-[9%] justify-between items-center bg-white "
      }
    >
      {search ? (
        <Navbar_search setSearch={setSearch} />
      ) : (
        <>
          <div>
            <Link to="/">
              <img
                className="w-[150px] h-[50px] object-cover"
                src="https://bm-discounts-prd-app-imageautoresize02.azureedge.net/imageautoresize/v2/L2Rpc2NvdW50cy1waWN0dXJlcy84NzFkNWU2ZC0xYjhiLTQzOTYtYjU2OC03ZmQzYzBmOWU1OTIvNTJjNTgyZWMtMjZmMC00YWU5LTljYWItZjcxZTRiNjUwMjRmLnBuZw2/"
                alt=""
              />
            </Link>
          </div>
          <ul className="flex gap-10 font-semibold text-sm	">
            <li className="hover:text-[#f4811f] cursor-pointer">DAMSKIE</li>
            <li className="hover:text-[#f4811f] cursor-pointer">MĘSKIE</li>
            <li className="hover:text-[#f4811f] cursor-pointer">DZIECIĘCE</li>
            <NavLink to="/marki">
              <li className="hover:text-[#f4811f] cursor-pointer">MARKI</li>
            </NavLink>
            <NavLink to="/wyprzedaż">
              <li className="hover:text-[#f4811f] cursor-pointer">SALE</li>
            </NavLink>
            <li className="hover:text-[#f4811f] cursor-pointer">NOWOŚCI</li>
            <li className="hover:text-[#f4811f] cursor-pointer">STREETWEAR</li>
          </ul>
          <ul className="flex gap-4 text-xs ">
            {user ? (
              <Link to="/profil/pulpit">
                <li className="flex flex-col items-center gap-1 hover:text-[#f4811f] cursor-pointer ">
                  <BiUserCircle size={26} /> {isSticky ? "TWOJE KONTO" : null}
                </li>
              </Link>
            ) : (
              <Link to="/login">
                <li className="flex flex-col items-center gap-1 hover:text-[#f4811f] cursor-pointer ">
                  <BiUserCircle size={26} /> {isSticky ? "ZALOGUJ" : null}
                </li>
              </Link>
            )}
            {user ? (
              <Link to="/profil/schowek">
                <li className="flex flex-col items-center gap-1   hover:text-[#f4811f] cursor-pointer">
                  <IoMdHeartEmpty size={26} /> {isSticky ? "SCHOWEK" : null}
                </li>
              </Link>
            ) : (
              <li
                onClick={() => alert("Zaloguj się aby móc dodawać do schowka")}
                className="flex flex-col items-center gap-1   hover:text-[#f4811f] cursor-pointer"
              >
                <IoMdHeartEmpty size={26} /> {isSticky ? "SCHOWEK" : null}
              </li>
            )}
            <li
              onClick={() => onClickHandler((prev) => !prev)}
              className="relative flex flex-col items-center gap-1  hover:text-[#f4811f] cursor-pointer"
            >
              <HiOutlineShoppingBag className="relative" size={26} />
              <div
                className={`absolute right-[6px] top-[-5px] bg-gray-300 h-[20px] w-[20px] flex justify-center items-center rounded-full text-xs ${
                  isSticky === false ? "-right-[3px] top-[-7px]" : null
                }`}
              >
                {quantityy}
              </div>
              {isSticky ? "KOSZYK" : null}
            </li>
            <li
              onClick={() => setSearch(true)}
              className="flex flex-col items-center gap-1 hover:text-[#f4811f] cursor-pointer"
            >
              <BsSearch size={26} />
              {isSticky ? "SZUKAJ" : null}
            </li>
          </ul>
        </>
      )}
    </nav>
  );
};

export default Navbar;
