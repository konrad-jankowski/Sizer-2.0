import React from "react";
import { RiStarFill, RiStarHalfFill, RiStarLine } from "react-icons/ri";

const Rating = ({ rating }) => {
  const ratingStar = Array.from({ length: 5 }, (elem, index) => {
    let number = index + 0.5;
    return (
      <span key={index}>
        {rating >= index + 1 ? (
          <RiStarFill size={20} fill="#f4811f" />
        ) : rating >= number ? (
          <RiStarHalfFill size={20} fill="#f4811f" />
        ) : (
          <RiStarLine size={20} fill="#f4811f" />
        )}
      </span>
    );
  });

  return <div className="flex">{ratingStar}</div>;
};

export default Rating;
