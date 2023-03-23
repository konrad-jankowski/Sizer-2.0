import React from "react";
import { Link } from "react-router-dom";
import { formatCurrencyUppercase } from "../utilities/formatCurrency";

const Product = ({ item }) => {
  return (
    <div className="w-[235px] h-[270px]">
      <Link to={`/${item.id}`}>
        <img className="w-[235px] h-[235px]" src={item.images[0]} alt="" />
      </Link>
      <div className="flex justify-between mt-2">
        <div>
          <Link to={`${item.id}`}>
            <h3 className="hover:underline font-semibold text-sm">
              {item.model.substring(0, 17)}
            </h3>
          </Link>
          <h4 className="text-sm font-bold">
            {formatCurrencyUppercase(item.price)}{" "}
            <span className="line-through	text-gray-500 font-bold text-sm">
              {item.discountFrom
                ? formatCurrencyUppercase(item.discountFrom)
                : null}
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
    </div>
  );
};

export default Product;
