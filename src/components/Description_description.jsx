import React, { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const Description_desciption = ({ item }) => {
  const [toggle, setToggle] = useState(false);

  const toggleHandler = () => {
    setToggle((prev) => !prev);
  };

  return (
    <div className="py-4 text-sm font-semibold border-y-[1.5px] leading-6">
      {toggle ? (
        <div className="font-medium">
          <div
            onClick={toggleHandler}
            className="flex items-center gap-2 font-semibold  cursor-pointer"
          >
            <AiOutlineMinus /> OPIS PRODUKTU
          </div>

          <p className="mt-5 mb-1 ">
            {item.description ? item.description[0] : null}
          </p>
          <ul className="list-disc ml-5 ">
            <li> {item.description ? item.description[1] : null}</li>
            <li> {item.description ? item.description[2] : null}</li>
            <li> {item.description ? item.description[3] : null}</li>
          </ul>
        </div>
      ) : (
        <div
          onClick={toggleHandler}
          className="flex items-center gap-2 cursor-pointer"
        >
          <AiOutlinePlus /> OPIS PRODUKTU
        </div>
      )}
    </div>
  );
};

export default Description_desciption;
