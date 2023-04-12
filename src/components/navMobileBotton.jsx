import React from "react";
import { BsHeart, BsCart, BsPerson, BsPower } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

function NavMobileBotton() {
  const navigate = useNavigate();

  return (
    <div className="py-4 px-6 w-full shadow flex xl:hidden justify-between items-center fixed bottom-0 bg-white z-40">
      <button
        onClick={() => navigate(`/carro-de-compras`)}
        aria-label="open menu"
        className=" border-b-2 border-transparent  flex px-1 items-center py-3 text-sm leading-5 text-gray-700 focus:outline-none transition duration-150 ease-in-out hover:text-red-500"
      >
        <div class="flex rounded-full right-0 top-0 h-8 w-8 justify-center items-center p-2 cursor-pointer group">
          <button className=" rounded-full right-0 top-0 h-8 w-8 bg-gray-200 flex justify-center items-center p-2 cursor-pointer group hover:text-red-500 ">
            <BsCart className="w-6 h-6"/>
          </button>
          <div>
            <p class="text-red-500 absolute">0</p>
          </div>
        </div>
      </button>
      <button
        aria-label="open menu"
        className=" border-b-2 border-transparent flex px-1 items-center py-3 text-sm leading-5 text-gray-700  focus:outline-none transition duration-150 ease-in-out hover:text-red-500"
      >
        <div class="flex rounded-full right-0 top-0 h-8 w-8 justify-center items-center p-2 cursor-pointer group">
          <button className=" rounded-full right-0 top-0 h-8 w-8 bg-gray-200 flex justify-center items-center p-2 cursor-pointer group hover:text-red-500 ">
            <BsHeart className="w-6 h-6" />
          </button>
          <div>
            <p class="text-red-500 absolute">0</p>
          </div>
        </div>
      </button>

      <button
        onClick={() => navigate(`/productos`)}
        aria-label="open menu"
        className="focus:text-indigo-700 border-b-2 border-transparent focus:border-indigo-700 flex px-1 items-center py-3 text-sm leading-5 text-gray-700 focus:outline-none transition duration-150 ease-in-out hover:text-red-500"
      >
        <BsPerson className="w-6 h-6" />
      </button>

      <button
        onClick={() => navigate(`/`)}
        aria-label="open menu"
        className="focus:text-indigo-700 border-b-2 border-transparent focus:border-indigo-700 flex px-1 items-center py-3 text-sm leading-5 text-gray-700 focus:outline-none transition duration-150 ease-in-out hover:text-red-500"
      >
        <BsPower className="w-6 h-6" />
      </button>
    </div>
  );
}

export default NavMobileBotton;
