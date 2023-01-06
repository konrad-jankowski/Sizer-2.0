import React from "react";
import { Link } from "react-router-dom";
import Rating from "./Rating";

const Product = ({ item }) => {
  return (
    <div className="w-[235px] h-[270px]">
      <img className="w-[235px] h-[235px]" src={item.images[0]} alt="" />
      <div className="flex justify-between mt-2">
        <div>
          <h3>{item.model.substring(0, 17)}</h3>
          <h3>{/* <Rating rating={item.rating} /> */}</h3>
          <h4 className="text-sm">
            {item.price} ZŁ{" "}
            <span className="line-through	text-gray-400">
              {item.discountFrom ? item.discountFrom + " ZŁ" : null}
            </span>
          </h4>
        </div>
        <div className="h-[45px] w-[60px]">
          <img
            className="w-full h-full object-contain"
            src={item.companyUrl}
            alt=""
          />
        </div>
      </div>
      <button>
        <Link to={`${item.id}`}>Show more</Link>
      </button>
    </div>
  );
};

export default Product;
