import React, { useState } from "react";
import data from "../productsData";
import { RiCloseLine } from "react-icons/ri";

const ShoppingCart = () => {
  const airforce = data[0];

  const [toggle, setToggle] = useState(true);

  return (
    <div className={toggle ? "" : "hidden"}>
      <div className="absolute top-0 left-0 bg-black/80 w-full h-[260vh] z-10  " />
      <aside className="fixed top-0 right-0 w-[500px] h-[100vh] z-20 bg-white px-5 shadow-lg shadow-[#000000cd]	">
        <div className="flex justify-between my-8 ">
          <h2 className="font-bold text-xl ml-8">TWÓJ KOSZYK (2)</h2>
          <RiCloseLine
            size={26}
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
      </aside>
    </div>
  );
};

export default ShoppingCart;
