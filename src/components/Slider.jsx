import React, { useRef, useState } from "react";

const slider = ({ item }) => {
  const [img, setImg] = useState(item?.images[0]);

  const hoverHandler = (image, i) => {
    setImg(image);
    refs.current[i].classList.add("active");
    for (var j = 0; j < item?.images.length; j++) {
      if (i !== j) {
        refs.current[j].classList.remove("active");
      }
    }
  };
  const refs = useRef([]);

  const addRefs = (el) => {
    if (el && !refs.current.includes(el)) {
      refs.current.push(el);
    }
  };

  return (
    <div className="w-full h-full">
      <div>
        <img src={img} alt="" />
      </div>
      <div className="flex justify-center gap-2 mt-6">
        {item.images.map((image, i) => (
          <div
            className={i == 0 ? "img_wrap active" : "img_wrap"}
            key={i}
            onClick={() => hoverHandler(image, i)}
            ref={addRefs}
          >
            <img src={image} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};
export default slider;
