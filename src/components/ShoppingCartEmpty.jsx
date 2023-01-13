import React from "react";
import { RiCloseLine } from "react-icons/ri";
import { ToggleAuth } from "../context/ToggleCardContext";
import ShoppingCartEmpty_button from "./ShoppingCartEmpty_button";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import ProductSlider from "./ProductSlider";

const ShoppingCartEmpty = () => {
  const slideLeft = () => {
    const slider = document.getElementById(`slider`);
    slider.scrollLeft = slider.scrollLeft - 192;
  };
  const slideRight = () => {
    const slider = document.getElementById(`slider`);
    slider.scrollLeft = slider.scrollLeft + 192;
  };

  const { toggle, setToggle } = ToggleAuth();

  const closeHandler = () => {
    setToggle((prev) => !prev);
    const elo = document.getElementById("essa");
    elo.classList.add("sidebar");
  };

  const openHandler = () => {
    setToggle((prev) => !prev);
    const elo = document.getElementById("essa");
    elo.classList.add("sidebarOut");
  };

  return (
    <>
      <div
        className={`absolute top-0 left-0 bg-black/80 w-full h-[260vh] z-10 ${
          toggle ? "" : "hidden"
        } `}
      />
      <aside
        className={`essa fixed top-0 right-0 w-[30vw] h-[100vh] z-20 bg-white px-5 shadow-lg shadow-[#000000cd] ${
          toggle ? "sidebar" : "sidebarOut"
        } `}
      >
        <div className="flex justify-between my-7 ">
          <h2 className="font-bold text-xl ml-8">TWÓJ KOSZYK (2)</h2>
          <RiCloseLine
            size={28}
            className="hover:text-[#f4811f] cursor-pointer"
            onClick={closeHandler}
            // onClick={() => setToggle((prev) => !prev)}
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
          className="text-center font-bold text-xl tracking-wide mt-6
        	"
        >
          OSTATNIO OGLĄDANE
        </h2>
        <div className="flex items-center justify-center">
          <BsChevronLeft
            onClick={slideLeft}
            size={28}
            className="cursor-pointer"
          />
          <ProductSlider />
          <BsChevronRight
            onClick={slideRight}
            size={28}
            className="cursor-pointer"
          />
        </div>
      </aside>
    </>
  );
};

export default ShoppingCartEmpty;
