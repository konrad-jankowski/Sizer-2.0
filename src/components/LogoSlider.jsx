import React from "react";
import shoes from "../productsData";

const LogoSlider = () => {
  let uniqueObjArray = [
    ...new Map(shoes.map((item) => [item["companyUrl"], item])).values(),
  ];

  return (
    <div className="bg-gray-200 flex items-center justify-evenly h-[100px]">
      {uniqueObjArray.map((item) => {
        return (
          <div className="w-[70px] h-[70px]" key={item.id}>
            <img
              className="w-full h-full object-contain mix-blend-darken opacity-50 hover:opacity-30 cursor-pointer"
              src={item.companyUrl}
              alt={item.companyUrl}
            />
          </div>
        );
      })}
    </div>
  );
};

export default LogoSlider;
