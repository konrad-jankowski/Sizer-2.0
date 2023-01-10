import React, { useState } from "react";
import data from "../productsData";
import cartIcon from "../images/cart-icon.svg";
import { RiCloseLine } from "react-icons/ri";
import { ToggleAuth } from "../context/ToggleCardContext";

const ShoppingCartEmpty = () => {
  const airforce = data[0];

  const { toggle, setToggle } = ToggleAuth();

  // const [toggle, setToggle] = useState(true);

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
        <img
          className="mx-auto mt-14 w-[86px] h-[76px]"
          src="https://sklep.sizeer.com/files/sizeer_pl/icons/bag.svg"
          alt=""
        />
        <h2 className="text-[#b2b2b2] text-xl text-center mt-6">
          TWÓJ KOSZYK JEST PUSTY
        </h2>
        <h2
          className="text-center font-bold text-xl tracking-wide mt-4
        	"
        >
          SPRAWDŹ CO MAMY DO ZAOFEROWANIA:
        </h2>
        <button className="border border-black">SNEAKERSY</button>
        <button>TRAMPKI</button>
      </aside>
    </div>
  );
};

export default ShoppingCartEmpty;
