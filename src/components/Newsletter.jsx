import React, { useState } from "react";
import { useNavigate } from "react-router";
import Newsletter_message from "./Newsletter_message";

const Newsletter = () => {
  const [message, setMessage] = useState(true);
  const [inputData, setInputData] = useState([
    {
      email: "",
      męska: false,
      damska: false,
    },
  ]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setInputData((prevInputData) => {
      return {
        ...prevInputData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputData);
    setMessage(false);
  };

  return (
    <>
      {message ? (
        <form
          className="flex w-full items-center justify-between px-[3.5rem] "
          onSubmit={handleSubmit}
        >
          <span className="flex gap-10 items-center">
            <h2 className="font-semibold text-lg">NEWSLETTER</h2>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              value={inputData.email || ""}
              placeholder="Adres e-mail"
              className="py-3 px-2 text-xs w-[220px] text-black outline-none"
            />
          </span>
          <span className="flex gap-10 items-center">
            <h2>Interesuje mnie oferta:</h2>
            <div>
              <label className="label">
                <input
                  type="checkbox"
                  name="damska"
                  id="damska"
                  onChange={handleChange}
                />
                <span className="cursor-pointer border py-2 px-6 select-none text-base  hover:bg-[#f4811f] hover:border-[#f4811f]">
                  MĘSKA
                </span>
              </label>
              <label className="label">
                <input
                  type="checkbox"
                  name="męska"
                  id="męska"
                  onChange={handleChange}
                />
                <span className="cursor-pointer border py-2 px-6 select-none text-base hover:bg-[#f4811f] hover:border-[#f4811f]">
                  DAMSKA
                </span>
              </label>
            </div>
          </span>
          <button className="bg-[#f4811f] py-3 px-12 font-semibold hover:bg-[#f4821fc6]">
            ZAPISZ SIĘ
          </button>
        </form>
      ) : (
        <Newsletter_message />
      )}
    </>
  );
};

export default Newsletter;
