import React from "react";
import { MdLocationOn } from "react-icons/md";
import { SlArrowRight } from "react-icons/sl";
import Button_buy from "../components/Button_buy";
import Button_favorite from "../components/Button_favorite";
import Slider from "../components/Slider";
import shoes from "../productsData";
import Rating from "../components/Rating";
import Size from "../components/Size";
import ProcentageCalculator from "../components/ProcentageCalculator";
import Description from "../components/Description";

const ProductPage = () => {
  return (
    <>
      {shoes.map((item) => {
        return (
          <div className="flex mx-[8%] mt-10 mb-20" key={item.id}>
            <div className="flex-1   mr-20">
              <p className="mt-4 mb-10 flex gap-2 items-center text-sm font-medium  ">
                SIZEER <SlArrowRight fill="#f4811f" /> SNEAKERSY{" "}
                <SlArrowRight fill="#f4811f" />{" "}
                <span className="text-[#f4811f]">{item.model}</span>{" "}
              </p>
              <Slider item={item} />
            </div>
            <div className="flex-1 ">
              <div className="flex justify-between">
                <div>
                  <h1 className="text-lg font-bold mb-2">{item.model}</h1>
                  <div className="flex gap-2 items-center mb-2">
                    <Rating rating={item.rating} />
                    <span className="text-gray-500 font-medium">
                      {item.rating}
                    </span>
                    <span className="text-xs text-gray-500 font-semibold">
                      ( {item.ratingUsers} )
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 mb-1">
                    Kod producenta: 805899-003
                  </p>
                  <h4 className="font-semibold text-sm mb-4">KOLOR CZARNY</h4>
                </div>
                <img
                  className="w-[78px] h-[54px] object-contain"
                  src={item.companyUrl}
                  alt=""
                />
              </div>
              <div className="flex gap-2 text-sm font-semibold text-[#f4811f] items-center mb-3">
                <span className="text-5xl font-bold mr-2">{item.price} zł</span>{" "}
                z Vat +
                <img
                  className="w-[28px h-[20px]"
                  src="https://sklep.sizeer.com/media/cache/resolve/filemanager_original/images/sizeer/icons/icon_delivery.png"
                  alt=""
                />
                DARMOWA DOSTAWA
              </div>
              {item.discountFrom ? (
                <h3 className="text-xs font-medium text-[#f4811f]  mb-6">
                  <span className="line-through text-gray-400 mr-1">
                    Cena początkowa: {item.discountFrom}zł
                  </span>
                  <ProcentageCalculator item={item} />
                </h3>
              ) : null}
              <h3 className="font-semibold text-base text-gray-400">
                PRODUKT SPECJALNY
              </h3>
              <h4 className="font-bold text-xs mt-2 mb-4 hover:underline cursor-pointer ">
                {item.category}
              </h4>
              <div className="flex mt-2 mb-6">
                <Size item={item.sizes} />
              </div>
              <div className="mt-2 flex justify-between">
                <div className="flex items-center justify-center">
                  <div className="w-[10px] h-[10px] bg-green-600 rounded-full mr-2" />{" "}
                  <span className="text-xs">Dostępny</span>
                </div>
                <div className="flex items-center justify-center hover:text-[#f4811f] cursor-pointer">
                  <MdLocationOn size={26} />
                  <span className="underline font-semibold text-sm ml-2  ">
                    SPRAWDŹ DOSTĘPNOŚĆ W SALONACH
                  </span>
                </div>
              </div>
              <div className="mt-4 flex gap-4">
                <Button_buy />
                <Button_favorite />
              </div>
              <Description item={item} />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ProductPage;
