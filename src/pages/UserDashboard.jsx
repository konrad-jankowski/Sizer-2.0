import React from "react";
import Button_buy from "../components/Button_buy";

const UserDashboard = () => {
  return (
    <>
      <div className="flex px-[9%] mt-6 gap-6">
        <nav className="  w-[300px] h-fit font-semibold text-sm">
          <ul>
            <li className="border py-2 pl-4">Witaj</li>
            <li className=" border-l-black border-l-4 border-r pl-12 py-2">
              PULPIT
            </li>
            <li className="border py-2  pl-12">ZAMÓWIENIA</li>
            <li className="border border-t-0 py-2 pl-12">KSIĄŻKA ADRESOWA</li>
            <li className="border border-t-0  py-2 pl-12">SIZEERCLUB</li>
            <li className="border border-y-0  py-2 pl-12">USTAWIENIA</li>
            <li className="border py-2 pl-12">SCHOWEK</li>
          </ul>
        </nav>
        <main className="flex-1">
          <div className="flex justify-between w-full">
            <h2 className="font-semibold text-xl">TWOJE KONTO</h2>
            <Button_buy
              text={{
                text: "wyloguj się",
                class: "bg-black hover:bg-black/80 text-sm",
              }}
            />
          </div>
          <hr className="my-4" />
          <div className="flex flex-col text-gray-600">
            <h3>Twoje dane</h3>
            <p className="text-sm mt-2">Imię: Konrad</p>
            <p className="text-sm">Nazwisko: Jankowski</p>
            <p className="text-sm">Adres e-mail: kmj27@intera.pl</p>
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
