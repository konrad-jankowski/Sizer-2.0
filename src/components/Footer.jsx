import React, { useState } from "react";
import Newsletter from "./Newsletter";

const Footer = () => {
  return (
    <footer className="w-full h-[44vh] bg-[#191919] flex items-center justify-center ">
      <div className="text-white border border-dashed border-white/50 h-[10rem] w-[80vw] flex justify-center ">
        <Newsletter />
      </div>
    </footer>
  );
};

export default Footer;
