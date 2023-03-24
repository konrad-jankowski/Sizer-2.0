import React, { useEffect } from "react";
import { RiCloseLine } from "react-icons/ri";
import { ToggleAuth, useShoppingCart } from "../context/ToggleCardContext";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import Button_buy from "./Button_buy";
import Button_favorite from "./Button_favorite";
import ProductSlider from "./ProductSlider";
import { formatCurrencyLowercase } from "../utilities/formatCurrency";
import { doc, onSnapshot, updateDoc } from "firebase/firestore";
import { db } from "../firebase";
import ShoppingCartEmpty_button from "./ShoppingCartEmpty_button";
import { Link } from "react-router-dom";
import ShoppingCartStatus from "./UserDashboard/ShoppingCartStatus";

const ShoppingCart = () => {
  const { test, setTest, quantityy } = useShoppingCart();
  const { toggle, setToggle, user } = ToggleAuth();

  const slideLeft = () => {
    var slider = document.getElementById(`slider`);
    slider.scrollLeft = slider.scrollLeft - 192;
  };
  const slideRight = () => {
    var slider = document.getElementById(`slider`);
    slider.scrollLeft = slider.scrollLeft + 192;
  };
  useEffect(() => {
    onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
      setTest(doc.data()?.shoppingCartItems);
    });
  }, [user?.email]);

  const totalPrice = test?.map((product) => {
    if (product.item.productSize != undefined) return product.item.price;
  });

  const total = totalPrice?.reduce(function (s, v) {
    return s + (v || 0);
  }, 0);

  const productRef = doc(db, "users", `${user?.email}`);
  const deleteProduct = async (passedId) => {
    try {
      const result = test.filter((item) => item.item.uuid !== passedId);
      await updateDoc(productRef, {
        shoppingCartItems: result,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <ShoppingCartStatus total={total} />
      <div
        onClick={() => setToggle(false)}
        className={`absolute top-0 left-0 bg-black/80 w-full h-[245.4vh] z-30 ${
          toggle ? "" : "hidden"
        } `}
      />{" "}
      <aside
        className={`absolute top-0 right-0 w-[30vw] h-[245.4vh] z-40 bg-white px-5 shadow-lg shadow-[#000000cd] ${
          toggle ? "sidebar" : "hidden"
        } `}
      >
        <div className="flex justify-between my-8 ">
          <h2 className="font-bold text-xl ml-8">TWÓJ KOSZYK ({quantityy})</h2>
          <RiCloseLine
            size={28}
            className="hover:text-[#f4811f] cursor-pointer"
            onClick={() => setToggle((prev) => !prev)}
          />
        </div>
        {quantityy === 0 ? (
          <>
            <img
              className="mx-auto mt-8 w-[86px] h-[76px]"
              src="https://sklep.sizeer.com/files/sizeer_pl/icons/bag.svg"
              alt=""
            />
            <h2 className="text-[#b2b2b2] text-xl text-center mt-6">
              TWÓJ KOSZYK JEST PUSTY
            </h2>
            <h2
              className="font-bold text-xl tracking-wide mt-6 mb-1 w-[28vw]
          "
            >
              SPRAWDŹ CO MAMY DO ZAOFEROWANIA:
            </h2>
            <div className="flex flex-col">
              <ShoppingCartEmpty_button text={{ categoria: "SNEAKERSY" }} />
              <ShoppingCartEmpty_button text={{ categoria: "TRAMPKI" }} />
              <ShoppingCartEmpty_button text={{ categoria: "AKCESORIA" }} />
            </div>
          </>
        ) : (
          <>
            {test?.map((item) => {
              if (item.item.productSize) {
                return (
                  <div
                    key={item.item.uuid}
                    className="flex justify-between items-end mb-3 pb-3 border-b"
                  >
                    <div className="flex items-center gap-2">
                      <img
                        className="w-[110px] h-[110px] object-contain"
                        src={item.item.images[0]}
                        alt={item.item.model}
                      />
                      <span>
                        <h4 className="font-semibold text-sm">
                          {item.item.model}
                        </h4>
                        <p className="font-normal text-xs">
                          Rozmiar: {item.item.productSize}
                        </p>
                      </span>
                    </div>
                    <div className="flex flex-col gap-3 items-end">
                      <RiCloseLine
                        onClick={() => deleteProduct(item.item.uuid)}
                        size={20}
                        className="text-gray-400 hover:text-[#f4811f] cursor-pointer"
                      />
                      <h3 className="font-bold text-sm mr-7">
                        {formatCurrencyLowercase(item.item.price)}
                      </h3>
                    </div>
                  </div>
                );
              }
            })}
            <h2 className="font-bold text-xl ml-8 text-end mr-10">
              Łączna wartość: {formatCurrencyLowercase(total)}
            </h2>
          </>
        )}

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
          {
            <Link onClick={() => setToggle(false)} to="koszyk/lista">
              <Button_buy
                text={{
                  text: "przejdź do koszyka",
                  class: `h-12 text-lg w-full ${
                    quantityy === 0 ? "hidden" : null
                  }`,
                }}
              />
            </Link>
          }
          <div onClick={() => setToggle(false)}>
            <Button_favorite
              text={{
                text: "kontynuuj zakupy",
                class: `bg-white w-full h-12 text-lg ${
                  quantityy === 0 ? "hidden" : null
                }`,
              }}
            />
          </div>
        </span>
      </aside>
    </>
  );
};

export default ShoppingCart;
