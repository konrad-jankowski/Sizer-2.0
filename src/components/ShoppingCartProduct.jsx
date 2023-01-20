import React from "react";
import { RiCloseLine } from "react-icons/ri";
import { ToggleAuth } from "../context/ToggleCardContext";
import data from "../productsData";

const ShoppingCartProduct = ({ id, quantity }) => {
  const item = data.find((i) => i.id === id);
  if (item == null) return null;
  const { formData, removeFromCart } = ToggleAuth();

  return (
    <>
      <div className="flex justify-between items-end mb-3 pb-3 border-b">
        <div className="flex items-center gap-2">
          <img
            className="w-[110px] h-[110px] object-contain"
            src={item.images[0]}
            alt={item.model}
          />
          <span>
            <h4 className="font-semibold text-sm">{item.model}</h4>
            <p className="font-normal text-xs">
              Rozmiar: {formData.productSize} {quantity}xSZT.
            </p>
          </span>
        </div>
        <div className="flex flex-col gap-3 items-end">
          <RiCloseLine
            onClick={() => removeFromCart(item.id)}
            size={20}
            className="text-gray-400 hover:text-[#f4811f] cursor-pointer"
          />
          <h3 className="font-bold text-sm mr-7">{item.price} zł</h3>
        </div>
      </div>
    </>
  );
};

export default ShoppingCartProduct;
