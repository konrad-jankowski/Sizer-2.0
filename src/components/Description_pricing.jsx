import React, { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const Description_pricing = () => {
  const [toggle, setToggle] = useState(false);

  const toggleHandler = () => {
    setToggle((prev) => !prev);
  };

  return (
    <p className="py-4 text-sm font-semibold border-b-[1.5px] leading-6 ">
      {toggle ? (
        <div className="font-medium">
          <div
            onClick={toggleHandler}
            className="flex items-center gap-2 font-semibold  cursor-pointer"
          >
            <AiOutlineMinus /> WARUNKI PŁATNOŚCI I DOSTAWY
          </div>
          <p className="mt-5 mb-8">
            <span className="font-bold ">
              Zawsze darmowa dostawa do Salonów.
            </span>{" "}
            Bez względu na wartość zamówienia.
          </p>
          <p className="font-bold mb-3">Dostawa:</p>
          <p>Darmowa dostawa już od 100 zł!</p>
          <ul className="mt-4 list-disc ml-5 ">
            <li>do paczkomatu InPost</li>
            <li>firmą kurierską DPD</li>
            <li>DPD Pickup Point</li>
            <li>DHL POP (odbiór w punkcie)</li>
          </ul>
        </div>
      ) : (
        <div
          onClick={toggleHandler}
          className="flex items-center gap-2 cursor-pointer"
        >
          <AiOutlinePlus /> WARUNKI PŁATNOŚCI I DOSTAWY
        </div>
      )}
    </p>
  );
};

export default Description_pricing;
