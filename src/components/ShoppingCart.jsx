import React, { useState } from "react";
import data from "../productsData";
import { RiCloseLine } from "react-icons/ri";
import { ToggleAuth } from "../context/ToggleCardContext";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import Button_buy from "./Button_buy";
import Button_favorite from "./Button_favorite";
import { HiOutlineShoppingBag } from "react-icons/hi";

const ShoppingCart = () => {
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
      <aside className="fixed top-0 right-0 w-[500px] h-[100vh] z-20 bg-white px-5 shadow-lg shadow-[#000000cd]	">
        <div className="flex justify-between my-8 ">
          <h2 className="font-bold text-xl ml-8">TWÓJ KOSZYK (2)</h2>
          <RiCloseLine
            size={28}
            className="hover:text-[#f4811f] cursor-pointer"
            onClick={() => setToggle((prev) => !prev)}
          />
        </div>
        <div className="flex justify-between items-end mb-3 pb-3 border-b">
          <div className="flex items-center gap-2">
            <img
              className="w-[110px] h-[110px] object-contain"
              src={airforce.images[0]}
              alt={airforce.model}
            />
            <span>
              <h4 className="font-semibold text-sm">{airforce.model}</h4>
              <p className="font-normal text-xs">ROZMIAR: 37.5 1xSZT.</p>
            </span>
          </div>
          <div className="flex flex-col gap-3 items-end">
            <RiCloseLine
              size={20}
              className="text-gray-400 hover:text-[#f4811f] cursor-pointer"
            />
            <h3 className="font-bold text-sm mr-7">{airforce.price} zł</h3>
          </div>
        </div>
        <h2 className="font-bold text-xl ml-8 text-end mr-10">
          Łączna wartość {airforce.price} zł
        </h2>
        <h2
          className="text-center font-bold text-xl tracking-wide mt-6 mb-4
        	"
        >
          POLECANE PRODUKTY
        </h2>
        <div className="flex items-center justify-center mb-8">
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
        <span className="flex flex-col gap-3">
          <Button_buy text={{ text: "przejdź do koszyka" }} />
          <Button_favorite
            text={{
              text: "kontynuuj zakupy",
              class: "bg-white w-full",
            }}
            icon={<HiOutlineShoppingBag />}
          />
        </span>
      </aside>
    </div>
  );
};

export default ShoppingCart;
