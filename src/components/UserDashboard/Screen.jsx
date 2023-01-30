import React from "react";
import Button_buy from "../Button_buy";
import { ToggleAuth } from "../../context/ToggleCardContext";

const Screen = () => {
  const { user } = ToggleAuth();
  return (
    <div className="flex  justify-between ">
      <div className="flex flex-col text-gray-600">
        <h3>Twoje dane</h3>
        <p className="text-sm">
          Imię: <span className="font-bold">{user?.displayName}</span>
        </p>
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
      <img
        className=" rounded-full w-[80px] h-[80px] object-cover"
        src={user.photoURL}
        alt=""
      />
    </div>
  );
};

export default Screen;
