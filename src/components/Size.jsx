import React from "react";

const Size = ({ item }) => {
  const getSize = (e) => {
    console.log(e.target.innerHTML);
  };

  return (
    <form className="flex flex-col">
      {item?.map((item, index) => (
        <label className="label" htmlFor={index}>
          <input type="radio" id={index} name="size" />
          <div
            onClick={getSize}
            className=" h-[50px]  w-[50px] border border-[#dce5e4] flex items-center justify-center cursor-pointer hover:border-y-[black]"
          >
            {item}
          </div>
        </label>
      ))}
      <button>Submit</button>
    </form>
  );
};

export default Size;
