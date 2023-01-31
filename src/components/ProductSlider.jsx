import React from "react";
import data from "../productsData";

const ProductSlider = () => {
  const shuffle = data
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
  return (
    <div
      id="slider"
      className="mt-2 w-[352px] m-auto overflow-x-scroll whitespace-nowrap scroll-smooth overflow-y-clip relative"
    >
      {shuffle.map((item) => (
        <div key={item.id} className="inline-block">
          <img
            className="w-[160px] h-[160px] mr-8 cursor-pointer"
            src={item.images[0]}
            alt=""
          />
          <h3 className="text-sm font-semibold text-gray-600 hover:underline cursor-pointer">
            {item.model.substring(0, 15) + "..."}
          </h3>
          <h3 className="text-base font-bold select-none">
            {item.price} ZŁ {""}
            <span className="text-base font-semibold select-none line-through text-gray-400">
              {item?.discountFrom ? item?.discountFrom + " ZŁ" : null}
            </span>
          </h3>
        </div>
      ))}
    </div>
  );
};

export default ProductSlider;
