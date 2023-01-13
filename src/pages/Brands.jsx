import React, { useState } from "react";
import Navbar from "../components/Navbar";
import data from "../productsData";

const Brands = () => {
  let uniqueObjArray = [
    ...new Map(data.map((item) => [item["companyUrl"], item])).values(),
  ];

  return (
    <main className="bg-gray-200 h-[100vh] ">
      <Navbar />
      <h1 className="text-center m-6 font-bold text-4xl">Marki</h1>
      <div className="flex px-[9%]">
        {uniqueObjArray.map((item) => (
          <div
            key={item.id}
            className="w-[200px] h-[200px] flex flex-col justify-center items-center bg-white m-4 cursor-pointer border-4 border-white hover:border-[#f4811f] "
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
