import React from "react";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";

const SortBar = () => {
  return (
    <div className="flex">
      <label>SORTUJ</label>
      <select name="" id="">
        <option>POPULARNE</option>
        <option>OD NAJTAŃSZYCH</option>
        <option>OD NAJDROŻSZYCH</option>
      </select>
      <label>WYNIKÓW NA STRONĘ</label>
      <select name="" id="">
        <option>60</option>
        <option>120</option>
      </select>
      <label>Z 3131 PRODUKTÓW</label>
      <div className="flex items-center">
        <AiOutlineLeft />
        <h3>Strona</h3>
        <input className="w-[35px]" type="number" name="" id="" />
        <h3>z 53</h3>

        <AiOutlineRight />
      </div>
    </div>
  );
};

export default SortBar;
