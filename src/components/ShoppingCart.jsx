import React, { useState } from "react";
import data from "../productsData";
import { RiCloseLine } from "react-icons/ri";
import { ToggleAuth, useShoppingCart } from "../context/ToggleCardContext";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import Button_buy from "./Button_buy";
import Button_favorite from "./Button_favorite";
import ProductSlider from "./ProductSlider";
import ShoppingCartProduct from "./ShoppingCartProduct";
import { formatCurrencyLowercase } from "../utilities/formatCurrency";

const ShoppingCart = () => {
  const { cartItems, cartQuantity } = useShoppingCart();
  const { toggle, setToggle } = ToggleAuth();
  const [newCart, setNewCart] = useState(cartItems);

  console.log("CART ITEMS", cartItems);

  const slideLeft = () => {
    var slider = document.getElementById(`slider`);
    slider.scrollLeft = slider.scrollLeft - 192;
    console.log(slider);
  };
  const slideRight = () => {
    var slider = document.getElementById(`slider`);
    slider.scrollLeft = slider.scrollLeft + 192;
  };

  return (
    <>
      <div
        className={`absolute top-0 left-0 bg-black/80 w-full h-[226.4vh] z-10 ${
          toggle ? "" : "hidden"
        } `}
      />{" "}
      <aside
        className={`absolute top-0 right-0 w-[30vw] h-[226.4vh] z-20 bg-white px-5 shadow-lg shadow-[#000000cd] ${
          toggle ? "sidebar" : "hidden"
        } `}
      >
        <div className="flex justify-between my-8 ">
          <h2 className="font-bold text-xl ml-8">
            TWÓJ KOSZYK ({cartQuantity})
          </h2>
          <RiCloseLine
            size={28}
            className="hover:text-[#f4811f] cursor-pointer"
            onClick={() => setToggle((prev) => !prev)}
          />
        </div>
        {newCart.map((item) => (
          <ShoppingCartProduct key={item.id} {...item} />
        ))}
        <h2 className="font-bold text-xl ml-8 text-end mr-10">
          Łączna wartość:{" "}
          {formatCurrencyLowercase(
            newCart.reduce((total, cartItem) => {
              const item = data.find((i) => i.id === cartItem.id);
              return total + (item?.price || 0) * cartItem.quantity;
            }, 0)
          )}
        </h2>

        <h2
          className="text-center font-bold text-xl tracking-wide mt-6 mb-7
        	"
        >
          POLECANE PRODUKTY
        </h2>
        <div className="flex items-center justify-center mb-8">
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
        <span className="flex flex-col gap-3">
          <Button_buy
            text={{
              text: "przejdź do koszyka",
              class: "h-12 text-lg",
            }}
          />
          <Button_favorite
            text={{
              text: "kontynuuj zakupy",
              class: "bg-white w-full h-12 text-lg",
            }}
          />
        </span>
      </aside>
    </>
  );
};

export default ShoppingCart;
