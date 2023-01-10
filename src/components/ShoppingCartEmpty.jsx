import React, { useState } from "react";
import data from "../productsData";
import cartIcon from "../images/cart-icon.svg";
import { RiCloseLine } from "react-icons/ri";
import { ToggleAuth } from "../context/ToggleCardContext";
import ShoppingCartEmpty_button from "./ShoppingCartEmpty_button";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const ShoppingCartEmpty = () => {
  const airforce = data[0];
  const product1 = data[1];
  const product2 = data[9];
  const product3 = data[4];
  const product4 = data[5];

  const arrOfProducts = [airforce, product1, product2, product3, product4];

  const { toggle, setToggle } = ToggleAuth();

  return (
    <div className={toggle ? "" : "hidden"}>
      <div className="absolute top-0 left-0 bg-black/80 w-full h-[260vh] z-10  " />
      <aside className="fixed top-0 right-0 w-[30vw] h-[100vh] z-20 bg-white px-5 shadow-lg shadow-[#000000cd]	">
        <div className="flex justify-between my-7 ">
          <h2 className="font-bold text-xl ml-8">TWÓJ KOSZYK (2)</h2>
          <RiCloseLine
            size={28}
            className="hover:text-[#f4811f] cursor-pointer"
            onClick={() => setToggle((prev) => !prev)}
          />
        </div>
        <img
          className="mx-auto mt-8 w-[86px] h-[76px]"
          src="https://sklep.sizeer.com/files/sizeer_pl/icons/bag.svg"
          alt=""
        />
        <h2 className="text-[#b2b2b2] text-xl text-center mt-6">
          TWÓJ KOSZYK JEST PUSTY
        </h2>
        <h2
          className="font-bold text-xl tracking-wide mt-6 mb-1
          w-[30vw]"
        >
          SPRAWDŹ CO MAMY DO ZAOFEROWANIA:
        </h2>
        <div className="flex flex-col">
          <ShoppingCartEmpty_button text={{ categoria: "SNEAKERSY" }} />
          <ShoppingCartEmpty_button text={{ categoria: "TRAMPKI" }} />
          <ShoppingCartEmpty_button text={{ categoria: "AKCESORIA" }} />
        </div>
        <h2
          className="text-center font-bold text-xl tracking-wide mt-6 mb-4
        	"
        >
          OSTATNIO OGLĄDANE
        </h2>
        <div className="flex items-center justify-center">
          <BsChevronLeft size={28} className="cursor-pointer" />
          <div className="flex flex-col ">
            <img
              className="w-[160px] h-[160px] mr-8 cursor-pointer"
              src={product1.images[0]}
              alt=""
            />
            <h3 className="text-sm font-semibold text-gray-600 hover:underline cursor-pointer">
              {product1.model.substring(0, 15) + "..."}
            </h3>
            <h3 className="text-base font-bold select-none">
              {product1.price} ZŁ {""}
              <span className="text-base font-semibold select-none line-through text-gray-400">
                {product1?.discountFrom ? product1?.discountFrom + " ZŁ" : null}
              </span>
            </h3>
          </div>
          <div className="flex flex-col ">
            <img
              className="w-[160px] h-[160px] cursor-pointer"
              src={product2.images[0]}
              alt=""
            />
            <h3 className="text-sm font-semibold text-gray-600 hover:underline cursor-pointer ">
              {product2.model.substring(0, 15) + "..."}
            </h3>
            <h3 className="text-base font-bold select-none">
              {product2.price} ZŁ {""}
              <span className="text-base font-semibold select-none line-through text-gray-400">
                {product2?.discountFrom ? product2?.discountFrom + " ZŁ" : null}
              </span>
            </h3>
          </div>
          <BsChevronRight size={28} className="cursor-pointer" />
        </div>
      </aside>
    </div>
  );
};

export default ShoppingCartEmpty;
