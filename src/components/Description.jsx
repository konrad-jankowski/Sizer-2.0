import React, { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import Description_desciption from "./Description_description";
import Description_pricing from "./Description_pricing";

const Description = ({ item }) => {
  return (
    <div className="w-full mt-8 ">
      <Description_desciption item={item} />
      <Description_pricing />
      <p className="py-4 text-sm font-semibold border-b-[1.5px] flex items-center gap-2 cursor-pointer">
        <AiOutlinePlus /> OPINIE
      </p>
    </div>
  );
};

export default Description;
