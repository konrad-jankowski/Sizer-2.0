import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button_buy from "../components/Button_buy";
import Navbar from "../components/Navbar";

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
      <Navbar />
      <section className="px-[9%]">
        <h2 className="mb-4 font-bold text-xl mt-12 ">TWOJE KONTO</h2>
        <hr />
        <main className="flex mt-8">
          <div className="flex-1">
            <h3 className="font-semibold text-lg mb-6">Rejestracja</h3>
            <form className="pl-10 pr-10 flex flex-col items-end gap-3">
              <span className="flex items-center">
                <label className="cursor-pointer mr-2" for="email">
                  Adres e-mail
                </label>
                <input
                  className="border border-gray-300 py-1  outline-none pl-2 text-sm rounded-sm w-[400px]"
                  type="email"
                  id="email"
                  name="email"
                />
              </span>
              <span className="flex items-center relative">
                <label className="cursor-pointer mr-2" for="pass">
                  Hasło
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
              <span className="flex justify-between w-[400px] text-gray-400 text-sm mb-2">
                <div>
                  <input type="checkbox" id="remember" name="remember" />
                  <label className="cursor-pointer ml-2" for="remember">
                    Zapamiętaj mnie
                  </label>
                </div>
                <p className="underline hover:text-[#f4811f] cursor-pointer">
                  Nie pamiętasz hasła?
                </p>
              </span>
              <Button_buy
                text={{
                  text: "zarejestruj się",
                  class: "bg-black hover:bg-black/80 place-self-end	",
                }}
              />
            </form>
          </div>
          <div className="flex-1 flex flex-col">
            <h3 className="font-semibold text-lg mb-6">
              Masz już konto? Zaloguj się!
            </h3>
            <Link to="/login">
              <Button_buy
                text={{
                  text: "Zaloguj się",
                  class: "bg-black hover:bg-black/80 place-self-end",
                }}
              />
            </Link>
          </div>
        </main>
      </section>
    </>
  );
};

export default Registration;
