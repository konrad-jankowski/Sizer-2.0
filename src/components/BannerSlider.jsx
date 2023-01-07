import React, { useState } from "react";
import banner1 from "../images/SALE_banner.jpg";
import banner2 from "../images/SALE_banner2.jpg";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const BannerSlider = () => {
  const [slide, setSlide] = useState(`${banner1}`);

  const slideDown = () => {
    setSlide(`${banner2}`);
  };
  const slideUp = () => {
    setSlide(`${banner1}`);
  };

  return (
    <div className="relative">
      <div
        onClick={slideDown}
        className="absolute top-[40%] bg-black/50 cursor-pointer py-4 px-2"
      >
        <BsChevronLeft size={44} fill="white" />
      </div>
      <img src={slide} alt="" />
      <div
        onClick={slideUp}
        className="absolute right-0  top-[40%] bg-black/50 cursor-pointer py-4 px-2 "
      >
        <BsChevronRight size={44} fill="white" />
      </div>
    </div>
  );
};

export default BannerSlider;
