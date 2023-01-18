import React, { useState } from "react";
import Newsletter from "./Newsletter";
import {
  AiOutlinePhone,
  AiOutlineMail,
  AiOutlineInstagram,
} from "react-icons/ai";
import { HiOutlineChatAlt2 } from "react-icons/hi";
import { FaFacebookF, FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full h-[44vh] bg-[#191919] flex flex-col items-center justify-center gap-10 ">
      <div className="text-white flex w-[80vw] justify-between">
        <div className="flex items-center gap-4 hover:text-[#f4811f]">
          <AiOutlinePhone size={25} />{" "}
          <span className="text-[14px] font-bold cursor-pointer">
            +48 123 123 123
          </span>
        </div>
        <div className="flex items-center gap-4  hover:text-[#f4811f]">
          <AiOutlineMail size={25} />{" "}
          <span className="text-[14px] font-bold cursor-pointer">
            sklep@sizer.com
          </span>
        </div>
        <div className="flex items-center gap-4 hover:text-[#f4811f]">
          <HiOutlineChatAlt2 size={25} />{" "}
          <span className="text-[14px] font-bold cursor-pointer">
            Rozmowa online <br /> z konsultantem
          </span>
        </div>
        <div className="flex flex-col gap-4 text-sm">
          <p className="text-xs ml-1">Znajdź nas na</p>
          <div className="flex gap-2">
            <AiOutlineInstagram
              className="hover:text-[#f4881f] cursor-pointer"
              size={37}
            />
            <FaFacebookF
              className="hover:text-[#f4881f] cursor-pointer"
              size={37}
            />
            <FaTiktok
              className="hover:text-[#f4881f] cursor-pointer"
              size={37}
            />
          </div>
        </div>
        <div className="flex flex-col gap-4 text-sm">
          <p className="text-xs ml-2">Pobierz aplikację</p>
          <div className="flex items-center justify-end gap-4">
            <div className="w-[140px] cursor-pointer ">
              <img
                className="w-full h-full object-contain"
                src="https://bsbiala.pl/images/blog/Pobierz-z-Google-Play.png"
                alt=""
              />
            </div>
            <div className="w-[135px] cursor-pointer">
              <img
                className="w-full h-full object-contain"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/1920px-Download_on_the_App_Store_Badge.svg.png?20170219160111"
                alt=""
              />
            </div>
            <div className="w-[135px] cursor-pointer">
              <img
                className="w-full h-full object-contain"
                src="https://iforum-de.c.huawei.com/dddd/images/2020/2/26/dd7a3fd1-df31-4082-b479-d025a72abe59.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="text-white border border-dashed border-white/50 h-[10rem] w-[80vw] flex justify-center ">
        <Newsletter />
      </div>
    </footer>
  );
};

export default Footer;
