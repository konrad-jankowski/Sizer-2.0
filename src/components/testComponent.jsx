import React from "react";
import { MdLocationOn } from "react-icons/md";
import { AiFillStar } from "react-icons/ai";
import Button_buy from "../components/Button_buy";
import Button_favorite from "../components/Button_favorite";
import Slider from "../components/Slider";
import shoes from "../productsData";

const ProductPage = () => {
  return (
    <div className="flex mx-[8%] mt-10 mb-20 ">
      <div className="flex-1   mr-20">
        <p className="text-xs mt-4 mb-10">
          SIZEER › SNEAKERSY › NIKE AIR FORCE 1{" "}
        </p>
        <Slider />
      </div>
      <div className="flex-1 ">
        <div className="flex justify-between">
          <div>
            <h1 className="text-lg font-bold mb-1">NIKE AIR FORCE 1</h1>
            <div className="flex gap-2 items-center mb-1">
              <span className="flex">
                <AiFillStar size={20} fill="#f4811f" />
                <AiFillStar size={20} fill="#f4811f" />
                <AiFillStar size={20} fill="#f4811f" />
                <AiFillStar size={20} fill="#f4811f" />
                <AiFillStar size={20} fill="#f4811f" />
              </span>
              <span className="text-gray-500 font-medium">4.9</span>
              <span className="text-xs text-gray-500 font-semibold">
                ( 24 )
              </span>
            </div>
            <p className="text-xs text-gray-500 mb-1">
              Kod producenta: 805899-003
            </p>
            <h4 className="font-semibold text-sm mb-4">KOLOR CZARNY</h4>
          </div>
          <img
            className="w-[78px] h-[54px]"
            src="https://sklep.sizeer.com/images/loga_marek/Nike_karta.png"
            alt=""
          />
        </div>
        <div className="flex gap-2 text-sm font-semibold text-[#f4811f] items-center mb-9">
          <span className="text-5xl font-bold mr-2">899,99 zł</span> z Vat +
          <img
            className="w-[28px h-[20px]"
            src="https://sklep.sizeer.com/media/cache/resolve/filemanager_original/images/sizeer/icons/icon_delivery.png"
            alt=""
          />
          DARMOWA DOSTAWA
        </div>
        <h3 className="font-semibold text-base text-gray-400">
          PRODUKT SPECJALNY
        </h3>
        <h4 className="font-bold text-xs mt-2 mb-4">SNEAKERSY</h4>
        <div className="flex mt-2 mb-6   ">
          <p className=" h-[50px]  w-[50px] border border-[#dce5e4] flex items-center justify-center cursor-pointer hover:border-y-[black]">
            42
          </p>
          <p className=" h-[50px]  w-[50px] border border-[#dce5e4] flex items-center justify-center cursor-pointer hover:border-y-[black]">
            43
          </p>
          <p className=" h-[50px]  w-[50px] border border-[#dce5e4] flex items-center justify-center cursor-pointer hover:border-y-[black]">
            44.5
          </p>
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
      </div>
    </div>
  );
};

export default ProductPage;
