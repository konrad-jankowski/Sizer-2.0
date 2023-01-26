import React, { useState } from "react";
import data from "../productsData";

let uniqueObjArray = [
  ...new Map(data.map((item) => [item["companyUrl"], item])).values(),
];

let sortedArray = uniqueObjArray.sort((a, b) => {
  let fa = a.brand.toLowerCase(),
    fb = b.brand.toLowerCase();

  if (fa < fb) {
    return -1;
  }
  if (fa > fb) {
    return 1;
  }
  return 0;
});

const Brands = () => {
  const [dataArray, setDataArray] = useState(sortedArray);

  const click = (e) => {
    const firstLetter = e.target.innerText.toLowerCase();
    const essa = sortedArray.filter((item) => {
      return item.brand.toLocaleLowerCase().charAt(0) === firstLetter;
    });
    setDataArray(essa);
  };

  return (
    <main className="bg-gray-200 h-[88vh] flex flex-col items-center">
      <h2 className="text-center m-6 font-bold text-4xl">Marki</h2>
      <p className="text-center text-sm font-medium text-gray-600">Flitry</p>
      <div className="flex justify-center gap-6 mb-6 mt-5">
        {sortedArray.map((item) => (
          <p
            onClick={click}
            key={item.id}
            className="flex items-center justify-center cursor-pointer font-semibold w-10 h-10 hover:border-[3px] hover:border-[#f4821fa3]"
          >
            {item.brand.charAt(0)}
          </p>
        ))}
      </div>
      <h3
        onClick={() => setDataArray(sortedArray)}
        className="mb-3 underline font-semibold hover:text-[#f4811f] cursor-pointer"
      >
        WSZYSTKIE MARKI
      </h3>
      <div className="flex justify-center ">
        {dataArray.map((item) => (
          <div
            key={item.id}
            className="w-[160px] h-[200px] flex flex-col justify-center items-center bg-white m-4 cursor-pointer border-4 border-white hover:border-[#f4811f] "
          >
            <img
              className="w-[100px] h-[150px] object-contain"
              src={item.companyUrl}
              alt={item.brand}
            />
            <h2 className="text-gray-400 underline">{item.brand}</h2>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Brands;
