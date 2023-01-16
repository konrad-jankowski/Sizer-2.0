import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button_buy from "../components/Button_buy";
import Navbar from "../components/Navbar";
import ShoppingCartEmpty from "../components/ShoppingCartEmpty";

const Login = () => {
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
      <Navbar />
      <section className="px-[9%]">
        <h2 className="mb-4 font-bold text-xl mt-12 ">TWOJE KONTO</h2>
        <hr />
        <main className="flex mt-8">
          <div className="flex-1">
            <h3 className="font-semibold text-lg mb-6">Logowanie</h3>
            <form className="pl-10 pr-10 flex flex-col items-end gap-3">
              <span className="flex items-center">
                <label className="cursor-pointer mr-2" htmlFor="email">
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
                <label className="cursor-pointer mr-2" htmlFor="pass">
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
                  <label className="cursor-pointer ml-2" htmlFor="remember">
                    Zapamiętaj mnie
                  </label>
                </div>
                <p className="underline hover:text-[#f4811f] cursor-pointer">
                  Nie pamiętasz hasła?
                </p>
              </span>
              <Button_buy text={{ text: "zaloguj się" }} />
            </form>
          </div>
          <div className="flex-1 flex flex-col">
            <h3 className="font-semibold text-lg mb-6">
              Nie masz jeszcze konta? Zarejestruj się!
            </h3>
            <p className="text-sm">Co zyskujesz?</p>
            <ul className="list-disc ml-4 mt-2 text-sm">
              <li>szybkie i wygodne zakupy</li>
              <li>możliwość śledzenia statusu swojego zamówienia</li>
              <li>dostęp do historii zakupów i listy życzeń</li>
              <li>możliwość przystąpienia do SizeerClub</li>
            </ul>
            <Link className="place-self-end" to="/rejestracja">
              <Button_buy
                text={{
                  text: "zarejestruj się",
                  class: "bg-black hover:bg-black/80 mt-6 mr-10",
                }}
              />
            </Link>
          </div>
        </main>
      </section>
    </>
  );
};

export default Login;
