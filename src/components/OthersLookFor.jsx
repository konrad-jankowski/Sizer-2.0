import React from "react";
import data from "../productsData";
import { formatCurrencyUppercase } from "../utilities/formatCurrency";
import { useNavigate } from "react-router";

const OthersLookFor = ({ text }) => {
  const navigate = useNavigate();
  let shuffled = data
    .slice(0, 5)
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);

  return (
    <>
      <div className="px-[9%]">
        <hr className="mb-2" />
        <div className="w-10 h-[2px] mb-4 bg-black mx-auto" />
        <h2 className="text-center font-bold text-lg mb-12">{text}</h2>
      </div>
      <div className="grid grid-cols-5 gap-x-4 gap-y-6 px-[9%] mb-10 ">
        {shuffled?.map((item) => {
          return (
            <div
              className="flex flex-col cursor-pointer"
              onClick={() => {
                navigate(`/${item.id}`), window.location.reload(true);
              }}
            >
              <img className="mb-3" src={item?.images[0]} alt="" />
              <p className="font-semibold text-sm">{item.model}</p>
              <span className="flex justify-between ">
                <span className="flex gap-2">
                  <p className="font-semibold">
                    {formatCurrencyUppercase(item.price)}
                  </p>
                  {item.discountFrom ? (
                    <p className="font-semibold text-gray-400 line-through">
                      {formatCurrencyUppercase(item.discountFrom)}
                    </p>
                  ) : null}
                </span>
                <img
                  className="w-[50px] object-contain "
                  src={item.companyUrl}
                  alt=""
                />
              </span>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default OthersLookFor;
