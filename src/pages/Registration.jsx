import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button_buy from "../components/Button_buy";
import { ToggleAuth } from "../context/ToggleCardContext";

const Registration = () => {
  const [message, setMessage] = useState(true);
  const [inputData, setInputData] = useState([
    {
      email: "",
      password: "",
    },
  ]);
  const [showPassword, setShowPassword] = useState(false);
  const { user, signUp } = ToggleAuth();
  const navigate = useNavigate();

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
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signUp(inputData.email, inputData.password);
      // alert(`Witaj ${inputData.email}`);
      setMessage(false);
      setTimeout(() => {
        navigate("/profil/pulpit");
      }, 4000);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setInputData((prevFormData) => {
      return {
        ...prevFormData,
        [e.target.name]: e.target.value,
      };
    });
  };

  return (
    <section className="px-[9%] mb-10">
      <h2 className="mb-4 font-bold text-xl mt-12 ">TWOJE KONTO</h2>
      <hr />
      {message ? (
        <main className="flex mt-8">
          <div className="flex-1">
            <h3 className="font-semibold text-lg mb-6">Rejestracja</h3>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
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
                    required
                  />
                </span>
                <span className="flex items-center">
                  <label className="cursor-pointer mr-2" htmlFor="secondName">
                    Nazwisko <span className="opacity-0">*</span>
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
                    value={inputData.email}
                    onChange={handleChange}
                    type="email"
                    id="email"
                    name="email"
                    required
                  />
                </span>
                <span className="flex items-center relative">
                  <label className="cursor-pointer mr-2" htmlFor="pass">
                    Hasło <span className="text-red-600">*</span>
                  </label>
                  <input
                    className="border border-gray-300 py-1  outline-none pl-2 text-sm rounded-sm w-[400px]"
                    value={inputData.password}
                    onChange={handleChange}
                    type="password"
                    id="pass"
                    name="password"
                    required
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
                  <label className="cursor-pointer mr-2" htmlFor="phone">
                    Telefon
                  </label>
                  <input
                    className="border border-gray-300 py-1  outline-none pl-2 text-sm rounded-sm w-[400px]"
                    type="phone"
                    id="phone"
                    name="phone"
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
      ) : (
        <h2 className="text-2xl font-medium mt-8">
          Rejestracja przebiegła pomyślnie! Zaraz zostaniesz przekierowany do
          panelu użytkownika.
        </h2>
      )}
    </section>
  );
};

export default Registration;
