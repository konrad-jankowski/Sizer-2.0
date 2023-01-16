import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button_buy from "../components/Button_buy";
import Navbar from "../components/Navbar";
import ShoppingCartEmpty from "../components/ShoppingCartEmpty";

const Registration = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    const x = document.getElementById("pass");
    if (x.type === "password") {
      x.type = "text";
      setShowPassword(true);
    } else {
      x.type = "password";
      setShowPassword(false);
    }
  };

  return (
    <>
      <ShoppingCartEmpty />
      <section className="px-[9%]">
        <h2 className="mb-4 font-bold text-xl mt-12 ">TWOJE KONTO</h2>
        <hr />
        <main className="flex mt-8">
          <div className="flex-1">
            <h3 className="font-semibold text-lg mb-6">Rejestracja</h3>
            <form className="flex flex-col gap-4">
              <div className="pl-10 pr-10 flex flex-col items-end gap-3">
                <span className="flex items-center">
                  <label className="cursor-pointer mr-2" htmlFor="firstName">
                    Imię <span className="text-red-600">*</span>
                  </label>
                  <input
                    className="border border-gray-300 py-1  outline-none pl-2 text-sm rounded-sm w-[400px]"
                    type="text"
                    id="firstName"
                    name="firstName"
                  />
                </span>
                <span className="flex items-center">
                  <label className="cursor-pointer mr-2" htmlFor="secondName">
                    Nazwisko <span className="text-red-600">*</span>
                  </label>
                  <input
                    className="border border-gray-300 py-1  outline-none pl-2 text-sm rounded-sm w-[400px]"
                    type="text"
                    id="secondName"
                    name="secondName"
                  />
                </span>
                <span className="flex items-center">
                  <label className="cursor-pointer mr-2" htmlFor="email">
                    E-mail <span className="text-red-600">*</span>
                  </label>
                  <input
                    className="border border-gray-300 py-1  outline-none pl-2 text-sm rounded-sm w-[400px]"
                    type="email"
                    id="email"
                    name="email"
                  />
                </span>
                <span className="flex items-center relative">
                  <label className="cursor-pointer mr-2" htmlFor="pass">
                    Hasło <span className="text-red-600">*</span>
                  </label>
                  <input
                    className="border border-gray-300 py-1  outline-none pl-2 text-sm rounded-sm w-[400px]"
                    type="password"
                    id="pass"
                    name="password"
                  />
                  <p
                    onClick={togglePassword}
                    className="absolute select-none right-6 cursor-pointer text-xs text-black/70"
                  >
                    {showPassword ? "Ukryj" : "Pokaż"}
                  </p>
                </span>
                <span className="flex items-center relative">
                  <label className="cursor-pointer mr-2" htmlFor="pass2">
                    Powtórz hasło <span className="text-red-600">*</span>
                  </label>
                  <input
                    className="border border-gray-300 py-1  outline-none pl-2 text-sm rounded-sm w-[400px]"
                    type="password"
                    id="pass2"
                    name="password2"
                  />
                </span>
                <span className="flex items-center relative">
                  <label className="cursor-pointer mr-2" htmlFor="pass">
                    Telefon
                  </label>
                  <input
                    className="border border-gray-300 py-1  outline-none pl-2 text-sm rounded-sm w-[400px]"
                    type="phone"
                    id="pass"
                    name="password"
                  />
                </span>
              </div>
              <span className="text-gray-600 text-xs mb-2 place-self-start select-none">
                <div className="flex items-center">
                  <input type="checkbox" id="remember" name="remember" />
                  <label className=" ml-2" htmlFor="remember">
                    Potwierdzam, że akceptuję{" "}
                    <span className="text-[#f4811f] hover:underline cursor-pointer">
                      Regulamin Sklepu
                    </span>{" "}
                    oraz zapoznałam/em się z{" "}
                    <span className="text-[#f4811f] hover:underline cursor-pointer">
                      Polityką prywatności
                    </span>
                    . <span className="text-red-600">*</span>
                  </label>
                </div>
              </span>
              <div className="flex justify-between mr-10 mt-2">
                <p className="text-[13px] text-gray-600">
                  {" "}
                  <span className="text-red-600">*</span> Pola wymagane
                </p>
                <Button_buy
                  text={{
                    text: "zarejestruj się",
                    class: "bg-black hover:bg-black/80",
                  }}
                />
              </div>
            </form>
          </div>
          <div className="flex-1 flex flex-col items-center ">
            <h3 className="font-semibold text-lg mb-6">
              Masz już konto? Zaloguj się!
            </h3>
            <Link className="" to="/login">
              <Button_buy
                text={{
                  text: "Zaloguj się",
                  class: "bg-black hover:bg-black/80",
                }}
              />
            </Link>
            <p className=" text-gray-500 text-[13px] mt-2 hover:underline cursor-pointer">
              Przypomnij hasło
            </p>
          </div>
        </main>
      </section>
    </>
  );
};

export default Registration;
