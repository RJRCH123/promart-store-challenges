import React from "react";
import Logo from "../imgs/Logos/icon1.png";
import {
  BsCommand,
  BsSearch
} from "react-icons/bs";

function NavMobileTop() {
  return (
      <nav className="py-3 px-6 shadow w-full flex xl:hidden justify-between items-center bg-white fixed top-0 z-40">
        <div
          aria-label="logo"
          role="img"
          tabindex="0"
          className="focus:outline-none w-24"
        >
          <img className="h-8" src={Logo} alt="Promart" />
        </div>
        <div className="flex items-center ">
          <button
            aria-label="open menu"
            className="mr-2 border-b-2 border-transparent  flex px-1 items-center py-1 text-sm leading-5 text-gray-700 focus:outline-none transition duration-150 ease-in-out hover:text-red-500 focus:text-red-500"
          >
            <BsSearch className="w-6 h-6"/>
          </button>
          <button
            id="menu"
            aria-label="open menu"
            className=" border-b-2 border-transparent flex px-1 items-center py-1 text-sm leading-5 text-gray-700 focus:outline-none transition duration-150 ease-in-out hover:text-red-500 focus:text-red-500"
          >
            <BsCommand className="w-6 h-6"/>
          </button>
        </div>
      </nav>
  );
}

export default NavMobileTop;
