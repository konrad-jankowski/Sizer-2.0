import React from "react";
import { Link } from "react-router-dom";
import { ToggleAuth } from "../../context/ToggleCardContext";
import { formatCurrencyLowercase } from "../../utilities/formatCurrency";

const ShoppingCartStatus = ({ total }) => {
  const { toggle } = ToggleAuth();

  if (total > 0 && toggle !== true) {
    return (
      <Link to="/koszyk/lista">
        <div className="shadow-xl w-[116px] h-[116px] flex items-center justify-center rounded-full fixed z-10 bg-white bottom-[8%] left-[2%]">
          <img
            className="w-[64px]"
            src="https://upload.snrcdn.net/262b5630de6917abe64e6d9304c825288212951c/default/origin/f1e3d2de754d5b4f986018aaeee99739.svg"
            alt=""
          />
          <p className="absolute text-[11px] font-bold">
            {formatCurrencyLowercase(total)}
          </p>
        </div>
      </Link>
    );
  } else {
    return null;
  }
};

export default ShoppingCartStatus;
