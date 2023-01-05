import React from "react";
import Product from "./Product";
import SortBar from "./SortBar";
import shoes from "../productsData";

const Main_grid = () => {
  return (
    <main className="ml-[30%] mr-[9%] ">
      <div className="w-full h-[500px]  flex flex-col justify-center ">
        <SortBar />
        <div className="grid grid-cols-4 gap-12	">
          {shoes.map((item) => (
            <Product item={item} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Main_grid;
