import React from "react";

const Filter = () => {
  return (
    <aside className="flex flex-col uppercase border w-[240px] px-4  ">
      <h2 className="text-center border-b pb-2 mt-2">filtry</h2>
      <div className="flex flex-col mt-4 gap-1 ">
        <h3>kategoria</h3>
        <div>
          <input type="checkbox" id="remember" name="remember" />
          <label className="cursor-pointer ml-2" htmlFor="remember">
            trampki
          </label>
        </div>
        <div>
          <input type="checkbox" id="remember" name="remember" />
          <label className="cursor-pointer ml-2" htmlFor="remember">
            sneakersy
          </label>
        </div>
      </div>
      <div className="flex flex-col">
        <h3>marka</h3>
      </div>
    </aside>
  );
};

export default Filter;
