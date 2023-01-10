import React, { useState } from "react";
import Product from "./Product";
import SortBar from "./SortBar";
import shoes from "../productsData";
import Navbar from "./Navbar";
import BannerSlider from "./BannerSlider";
import Footer from "./Footer";
import LogoSlider from "./LogoSlider";
import ScrollToTopButton from "./ScrollToTopButton";
import ShoppingCart from "./ShoppingCart";

const Main_grid = () => {
  const [items, setItems] = useState(shoes);
  const [filterTextValue, updateFilterTextValue] = useState("popularne");

  const filterResult = (catItem) => {
    const result = shoes.filter((curData) => {
      return curData.category === catItem;
    });
    setItems(result);
  };

  const filteredProductList = items.filter((products) => {
    if (filterTextValue === "OD NAJTAŃSZYCH") {
      items.sort((a, b) => (a.price > b.price ? 1 : -1));
    } else if (filterTextValue === "OD NAJDROŻSZYCH") {
      items.sort((a, b) => (a.price < b.price ? 1 : -1));
    } else if (filterTextValue === "popularne") {
      items.sort((a, b) => (a.ratingUsers < b.ratingUsers ? 1 : -1));
    }
  });

  const onFilterValueSelected = (filterValue) => {
    updateFilterTextValue(filterValue);
    const result = shoes.filter((item) => {
      return item.discountFrom;
    });
    if (filterValue === "promocje") {
      setItems(result);
    } else {
      setItems(shoes);
    }
  };

  return (
    <>
      <ScrollToTopButton />
      <Navbar />
      <BannerSlider />
      <ShoppingCart />
      <main className="ml-[30%] mr-[9%] my-[20rem] ">
        <div className="w-full h-[500px]  flex flex-col justify-center">
          <SortBar onFilterValueSelected={onFilterValueSelected} />
          <button onClick={() => filterResult("TRAMPKI")}>Trampki</button>
          <button onClick={() => filterResult("SNEAKERSY")}>Sneakersy</button>
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
