import React from "react";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import shoes from "../productsData";

const SortBar = ({ onFilterValueSelected }) => {
  const onFilterValueChange = (e) => {
    onFilterValueSelected(e.target.value);
  };

  return (
    <div className="w-full flex items-center justify-between border-b-[1.5px] pb-3">
      <div>
        <label className="text-gray-400 font-semibold text-sm mr-2">
          SORTUJ
        </label>
        <select
          onChange={onFilterValueChange}
          className="border py-1 text-sm font-medium"
        >
          <option value="popularne">POPULARNE</option>
          <option value="OD NAJTAŃSZYCH">OD NAJTAŃSZYCH</option>
          <option value="OD NAJDROŻSZYCH">OD NAJDROŻSZYCH</option>
          <option value="promocje">PROMOCJE</option>
        </select>
      </div>
      <div>
        <label className="text-gray-400 font-semibold text-sm mr-2">
          WYNIKÓW NA STRONĘ
        </label>
        <select className="border py-1 text-sm font-medium ">
          <option className="flex ">60</option>
          <option>120</option>
        </select>
        <label className="text-gray-400 font-semibold text-sm ml-2">
          Z {shoes.length} PRODUKTÓW
        </label>
      </div>
      <div className="flex items-center gap-2 font-semibold text-sm">
        <AiOutlineLeft className="cursor-pointer" />
        <h3>Strona</h3>
        <span className="border w-[35px] flex justify-center">1</span>
        <h3>z 3</h3>
        <AiOutlineRight className="cursor-pointer" />
      </div>
    </div>
  );
};

export default SortBar;
