import React from "react";

const Size = ({ item }) => {
  return (
    <>
      {item.map((item) => (
        <p className=" h-[50px]  w-[50px] border border-[#dce5e4] flex items-center justify-center cursor-pointer hover:border-y-[black]">
          {item}
        </p>
      ))}
    </>
  );
};

export default Size;
