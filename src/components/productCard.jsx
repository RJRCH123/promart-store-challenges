import React from "react";
import { BsHeart } from "react-icons/bs";

function ProductCard(props) {
  return (
    <div id={props.id} class="relative max-w-sm min-w-[340px] bg-white shadow-md rounded-3xl p-2 mx-1 my-3 cursor-pointer">
      <div class="overflow-x-hidden rounded-2xl relative">
        <div class="flex rounded flex-col">
          <div class="bg-red-500 text-white w-1/4 text-center rounded-r-xl">
            -{props.dscto}%
          </div>
          <button className=" absolute rounded-full right-0 top-0 h-8 w-8 bg-gray-200 flex justify-center items-center p-2 cursor-pointer group hover:text-red-500 hover:bg-gray-100">
            <BsHeart />
          </button>
          <img
            class="h-40 rounded-2xl w-full object-cover"
            src={props.img}
            alt=""
          />
        </div>
      </div>
      <div class="mt-4 pl-2 mb-2 flex justify-between ">
        <div>
          <p class="text-lg font-semibold text-gray-900 mb-0">{props.name} </p>
          <p class="text-md text-gray-800 mt-0">S/. {props.price} </p>
        </div>

        <div class="flex flex-col-reverse group cursor-pointer">
          <a
            href="/detalle-producto"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 rounded-lg mx-1 text-xs px-2 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            {" "}
            Ver Detalle
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
