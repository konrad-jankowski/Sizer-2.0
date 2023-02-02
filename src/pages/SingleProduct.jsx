import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MdLocationOn } from "react-icons/md";
import { SlArrowRight } from "react-icons/sl";
import Slider from "../components/Slider";
import shoes from "../productsData";
import Rating from "../components/Rating";
import ProcentageCalculator from "../components/ProcentageCalculator";
import Description from "../components/Description";
import BannerSlider from "../components/BannerSlider";
import LogoSlider from "../components/LogoSlider";
import ScrollToTopButton from "../components/ScrollToTopButton";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import { formatCurrencyLowercase } from "../utilities/formatCurrency";
import { ToggleAuth } from "../context/ToggleCardContext";
import { db } from "../firebase";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import OthersLookFor from "../components/OthersLookFor";

const SingleProduct = () => {
  const [saved, setSaved] = useState(false);
  const { user, setToggle } = ToggleAuth();
  const { id } = useParams();
  const productId = doc(db, "users", `${user?.email}`);
  const newProduct = shoes.find((product) => product.id === id);
  const [item, setItem] = useState(newProduct);
  const [formData, setFormData] = useState({
    productSize: "",
  });
  const [sizeError, setSizeError] = useState(false);

  const saveProduct = async () => {
    if (user?.email) {
      setSaved(true);
      await updateDoc(productId, {
        savedFavorites: arrayUnion({
          id: item.id,
          model: item.model,
          images: item.images,
        }),
      });
    } else {
      alert("Zaloguj się by dodać do schowka!");
    }
  };

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
    setSizeError(false);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (user?.email) {
      const productSize = {
        productSize: formData.productSize,
        uuid: crypto.randomUUID(),
      };

      setItem((prev) => {
        const newArrayWithSize = { ...prev, ...productSize };
        return newArrayWithSize;
      });
      setToggle(true);
      const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      };
      scrollToTop();
    } else {
      alert("Zaloguj się lub zarejestruj!");
    }
  };

  useEffect(() => {
    const addNewDoc = async () => {
      if (user?.email) {
        await updateDoc(productId, {
          shoppingCartItems: arrayUnion({
            item,
          }),
        });
      } else {
        console.log("error");
      }
    };
    addNewDoc();
  }, [item]);

  return (
    <>
      <ScrollToTopButton />
      <BannerSlider />
      <div className="flex mx-[8%] mt-10 mb-20" key={item?.id}>
        <div className="flex-1   mr-20">
          <p className="mt-4 mb-10 flex gap-2 items-center text-sm font-medium  ">
            SIZEER <SlArrowRight fill="#f4811f" /> {item?.category}{" "}
            <SlArrowRight fill="#f4811f" />{" "}
            <span className="text-[#f4811f]">{item?.model}</span>{" "}
          </p>
          <Slider item={item?.images} />
        </div>
        <div className="flex-1 ">
          <div className="flex justify-between">
            <div>
              <h1 className="text-lg font-bold mb-2">{item?.model}</h1>
              <div className="flex gap-2 items-center mb-2">
                <Rating rating={item?.rating} />
                <span className="text-gray-500 font-medium">
                  {item?.rating}
                </span>
                <span className="text-xs text-gray-500 font-semibold">
                  ( {item?.ratingUsers} )
                </span>
              </div>
              <p className="text-xs text-gray-500 mb-1">
                Kod producenta: 805899-003
              </p>
              <h4 className="font-semibold text-sm mb-4">KOLOR CZARNY</h4>
            </div>
            <img
              className="w-[78px] h-[54px] object-contain"
              src={item?.companyUrl}
              alt=""
            />
          </div>
          <div className="flex gap-2 text-sm font-semibold text-[#f4811f] items-center mb-3">
            <span className="text-5xl font-bold mr-2">
              {formatCurrencyLowercase(item?.price)}
            </span>{" "}
            z Vat +
            <img
              className="w-[28px h-[20px]"
              src="https://sklep.sizeer.com/media/cache/resolve/filemanager_original/images/sizeer/icons/icon_delivery.png"
              alt=""
            />
            DARMOWA DOSTAWA
          </div>
          {item?.discountFrom ? (
            <h3 className="text-xs font-medium text-[#f4811f]  mb-6">
              <span className="line-through text-gray-400 mr-1">
                Cena początkowa: {formatCurrencyLowercase(item?.discountFrom)}
              </span>
              <ProcentageCalculator item={item} />
            </h3>
          ) : null}
          {item?.sizerPoints ? (
            <p className="bg-[#f4811f] text-center text-white uppercase py-[6px] font-semibold mb-4 mt-8">
              ✛ {item?.sizerPoints} pkt w{" "}
              <span className="underline">sizeerclub</span>
            </p>
          ) : null}
          <h4 className="font-bold text-xs mt-2 mb-4 hover:underline cursor-pointer w-fit ">
            {item?.category}
          </h4>
          <form onSubmit={handleSubmit}>
            <div className="flex mt-2 mb-6 relative">
              {sizeError ? (
                <p className="uppercase absolute bottom-[68px] bg-white px-8 font-medium py-3 top--10 border-2 border-red-600 text-xs after:content-[''] after:border-x-[10px] after:border-t-[10px] after:border-t-red-600 after:border-x-transparent after:border-b-[10px] after:border-b-transparent after:top-10 after:left-[50%] after:translate-x-[-50%] after:absolute ">
                  Wybierz rozmiar
                </p>
              ) : null}
              {item?.sizes.map((size) => (
                <label key={size} className="label" htmlFor={size}>
                  <input
                    required
                    onInvalid={() => setSizeError(true)}
                    type="radio"
                    id={size}
                    name="productSize"
                    value={size}
                    onChange={handleChange}
                  />
                  <div className=" h-[50px]  w-[50px] border border-[#dce5e4] flex items-center justify-center cursor-pointer hover:border-y-[black]">
                    {size}
                  </div>
                </label>
              ))}
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
              <button className="bg-[#f4811f] text-white rounded-sm flex items-center justify-center gap-2 px-6 py-2  font-semibold hover:bg-[#c96c1a] uppercase">
                <HiOutlineShoppingBag size={22} />
                dodaj do koszyka
              </button>
              <button
                type="button"
                onClick={saveProduct}
                className="bg-[#f3f3f3] border border-black rounded-sm flex items-center justify-center py-3 px-6 gap-2 font-semibold text-sm hover:bg-black hover:text-white uppercase"
              >
                {saved ? <IoMdHeart size={18} /> : <IoMdHeartEmpty size={18} />}{" "}
                Dodaj do schowka
              </button>
            </div>
          </form>
          <Description item={item} />
        </div>
      </div>
      <OthersLookFor text={"INNI KLIENCI SPRAWDZILI RÓWNIEŻ"} />
      <OthersLookFor text={"INNI KLIENCI KUPILI RÓWNIEŻ"} />
      <LogoSlider />
    </>
  );
};

export default SingleProduct;
