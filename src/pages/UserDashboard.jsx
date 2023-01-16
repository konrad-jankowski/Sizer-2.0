import React from "react";
import Navbar from "../components/Navbar";

const UserDashboard = () => {
  return (
    <>
      <Navbar />
      <div>
        <nav className="border w-[300px]">
          <h2>Witaj</h2>
          <ul>
            <li>PULPIT</li>
            <li>ZAMÓWIENIA</li>
            <li>KSIĄŻKA ADRESOWA</li>
            <li>SIZEERCLUB</li>
            <li>USTAWIENIA</li>
            <li>SCHOWEK</li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default UserDashboard;
