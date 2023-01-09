import React, { useEffect, useState } from "react";
import { SlArrowUp } from "react-icons/sl";

const ScrollToTopButton = () => {
  const [isTop, setIsTop] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setIsTop(true);
      } else {
        setIsTop(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      {isTop && (
        <div
          onClick={scrollToTop}
          className="p-4 right-0 top-[80%] fixed bg-[#191919] rounded-l-sm cursor-pointer"
        >
          <SlArrowUp size={26} fill="white" />
        </div>
      )}
    </>
  );
};

export default ScrollToTopButton;
