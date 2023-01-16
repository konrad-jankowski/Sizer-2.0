import React, { useState } from "react";
import Product from "../components/Product";
import SortBar from "../components/SortBar";
import shoes from "../productsData";
import Navbar from "../components/Navbar";
import BannerSlider from "../components/BannerSlider";
import Footer from "../components/Footer";
import LogoSlider from "../components/LogoSlider";
import ScrollToTopButton from "../components/ScrollToTopButton";
import ShoppingCart from "../components/ShoppingCart";
import ShoppingCartEmpty from "../components/ShoppingCartEmpty";
import Filter from "../components/Filter";

const Main_grid = () => {
  const [items, setItems] = useState(shoes);
  const [filterTextValue, updateFilterTextValue] = useState("popularne");

  const filterResult = (catItem) => {
    const result = shoes.filter((curData) => {
      return curData.category === catItem;
    });
    setItems(result);
  };
  const filterBrands = (brandItem) => {
    const result = shoes.filter((curData) => {
      return curData.brand === brandItem;
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
      <BannerSlider />
      {/* <ShoppingCart /> */}
      <ShoppingCartEmpty />
      <main className="my-12 flex justify-center">
        <div className="flex flex-row gap-4">
          <Filter />
          <div>
            <SortBar onFilterValueSelected={onFilterValueSelected} />
            {/* <button onClick={() => filterResult("TRAMPKI")}>Trampki</button>
            <button onClick={() => filterResult("SNEAKERSY")}>Sneakersy</button>
            <button onClick={() => filterBrands("Adidas")}>Adidas</button> */}
            <div className="grid grid-cols-4 gap-x-4 gap-y-10 mt-6	">
              {items.map((item) => (
                <Product item={item} key={item.id} />
              ))}
            </div>
          </div>
        </div>
      </main>
      <LogoSlider />
      <Footer />
    </>
  );
};

export default Main_grid;
