import React from "react";

const Size = ({ item }) => {
  return (
    <>
      {item?.map((item) => (
        <div
          className=" h-[50px]  w-[50px] border border-[#dce5e4] flex items-center justify-center cursor-pointer hover:border-y-[black]"
          key={item.id}
        >
          {item}
        </div>
      ))}
    </>
  );
};

export default Size;
