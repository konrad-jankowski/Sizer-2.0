import React, { useState } from "react";
import Product from "./Product";
import SortBar from "./SortBar";
import shoes from "../productsData";
import Navbar from "./Navbar";
import BannerSlider from "./BannerSlider";

const Main_grid = () => {
  const [items] = useState(shoes);

  return (
    <>
      <Navbar />
      <BannerSlider />
      <main className="ml-[30%] mr-[9%] my-[20rem] ">
        <div className="w-full h-[500px]  flex flex-col justify-center">
          <SortBar />
          <div className="grid grid-cols-4 gap-14 mt-6	">
            {items.map((item) => (
              <Product item={item} key={item.id} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default Main_grid;
