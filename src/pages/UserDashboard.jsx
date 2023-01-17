import React from "react";
import { useNavigate } from "react-router";
import Button_buy from "../components/Button_buy";
import { ToggleAuth } from "../context/ToggleCardContext";

const UserDashboard = () => {
  const { user, logOut } = ToggleAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      alert("Wylogowano pomyślnie");
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  const leftBorder =
    "relative before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:bg-black";

  const dashbordLinks = [
    "pulpit",
    "zamówienia",
    "książka adresowa",
    "SIZEERCLUB",
    "ustawienia",
    "schowek",
  ];

  return (
    <>
      <div className="flex px-[9%] mt-6 mb-12 gap-6">
        <nav className="  w-[300px] h-fit font-semibold text-sm border">
          <ul>
            <li className=" py-2 pl-4">Witaj</li>
            {/* <li className={`border-t pl-12 py-2 ${leftBorder} `}>PULPIT</li>
            <li className="border-t py-2  pl-12 before:content-[border]">
              ZAMÓWIENIA
            </li>
            <li className="relative border-t  py-2 pl-12 ">KSIĄŻKA ADRESOWA</li>
            <li className=" border-t  py-2 pl-12">SIZEERCLUB</li>
            <li className=" border-t  py-2 pl-12">USTAWIENIA</li>
            <li className="border-t py-2 pl-12">SCHOWEK</li> */}
            {dashbordLinks.map((item) => {
              return (
                <li
                  className={`border-t  py-2 pl-12 uppercase hover:bg-gray-300 cursor-pointer`}
                >
                  {item}
                </li>
              );
            })}
          </ul>
        </nav>
        <main className="flex-1">
          <div className="flex justify-between w-full">
            <h2 className="font-semibold text-xl">TWOJE KONTO</h2>
            <button
              onClick={handleLogout}
              className="bg-black hover:bg-black/80 text-sm font-semibold text-white rounded-sm flex items-center justify-center gap-2 px-6 py-2 uppercase"
            >
              wyloguj się
            </button>
          </div>
          <hr className="my-4" />
          <div className="flex flex-col text-gray-600">
            <h3>Twoje dane</h3>
            <p className="text-sm mt-2">Imię: </p>
            <p className="text-sm">Nazwisko: </p>
            <p className="text-sm">
              Adres e-mail: <span className="font-bold">{user?.email}</span>
            </p>
            <Button_buy
              text={{
                text: "zmień dane",
                class: "bg-black hover:bg-black/80 place-self-start	mt-4",
              }}
            />
          </div>
        </main>
      </div>
    </>
  );
};

export default UserDashboard;
