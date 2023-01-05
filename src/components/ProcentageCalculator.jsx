import React from "react";

const ProcentageCalculator = ({ item }) => {
  const discountCalculator = (x, y) => {
    return Math.round(((x - y) * 100) / x);
  };

  const procentage = discountCalculator(item.discountFrom, item.price);

  return <>(-{procentage}%)</>;
};

export default ProcentageCalculator;
