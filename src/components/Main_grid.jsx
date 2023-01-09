import React, { useState } from "react";
import Product from "./Product";
import SortBar from "./SortBar";
import shoes from "../productsData";
import Navbar from "./Navbar";
import BannerSlider from "./BannerSlider";
import Footer from "./Footer";
import LogoSlider from "./LogoSlider";
import ScrollToTopButton from "./ScrollToTopButton";

const Main_grid = () => {
  const [items] = useState(shoes);

  console.log(items.sort((a, b) => (a.price > b.price ? 1 : -1)));

  let [filterTextValue, updateFilterTextValue] = useState("popularne");

  let filteredProductList = items.filter((products) => {
    if (filterTextValue === "OD NAJTAŃSZYCH") {
      console.log(products.sort((a, b) => (a.price > b.price ? 1 : -1)));
    }
  });

  const onFilterValueSelected = (filterValue) => {
    updateFilterTextValue(filterValue);
    console.log(filterValue);
  };

  return (
    <>
      <ScrollToTopButton />
      <Navbar />
      <BannerSlider />
      <main className="ml-[30%] mr-[9%] my-[20rem] ">
        <div className="w-full h-[500px]  flex flex-col justify-center">
          <SortBar filterValueSelected={onFilterValueSelected} />
          <div className="grid grid-cols-4 gap-14 mt-6	">
            {items.map((item) => (
              <Product item={item} key={item.id} />
            ))}
          </div>
        </div>
      </main>
      <LogoSlider />
      <Footer />
    </>
  );
};

export default Main_grid;
