import React from "react";
import { Outlet, useNavigate } from "react-router";
import { NavLink } from "react-router-dom";
import { ToggleAuth } from "../context/ToggleCardContext";

const UserDashboard = () => {
  const { logOut } = ToggleAuth();
  const navigate = useNavigate();
  const urlParam = decodeURI(window.location.pathname);

  const dashbordLinks = ["pulpit", "zamówienia", "sizerclub", "schowek"];

  let activeClassName =
    "relative  before:absolute before:left-0 before:top-0 before:h-full before:w-1  before:bg-black border-t uppercase py-2 pl-12 bg-gray-200 text-black";

  const handleLogout = async () => {
    try {
      await logOut();
      alert("Wylogowano pomyślnie");
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="flex px-[9%] mt-6 mb-12 gap-6 min-h-[34.3vh] ">
        <nav className="w-[300px] h-fit font-semibold text-sm border">
          <ul>
            <li className=" py-2 pl-4">Witaj</li>
            {dashbordLinks.map((item, index) => {
              return (
                <NavLink key={index} to={`/profil/${item}`}>
                  {({ isActive }) => (
                    <li
                      className={
                        isActive
                          ? activeClassName
                          : "border-t hover:bg-gray-200 uppercase cursor-pointer py-2 pl-12"
                      }
                    >
                      {item}
                    </li>
                  )}
                </NavLink>
              );
            })}
          </ul>
        </nav>
        <main className="flex-1">
          <div className="flex justify-between items-center w-full">
            <h2 className="font-semibold text-xl  flex-1 uppercase">
              twoje konto - {urlParam.slice(8)}
            </h2>

            <button
              onClick={handleLogout}
              className="bg-black hover:bg-black/80 text-sm font-semibold text-white rounded-sm flex items-center justify-center gap-2 px-6 py-2 uppercase "
            >
              wyloguj się
            </button>
          </div>
          <hr className="my-4" />
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default UserDashboard;
