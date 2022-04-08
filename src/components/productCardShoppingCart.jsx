import React from 'react'
import { BsDashSquare, BsPlusSquare } from "react-icons/bs";

function ProductCardShoppingCart() {
  return (
    <div class="mt-4 md:mt-6 flex flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full">
    <div class="pb-4 md:pb-8 w-full md:w-40">
      <img
        class="w-full hidden md:block"
        src="https://i.ibb.co/84qQR4p/Rectangle-10.png"
        alt="dress"
      />
      <img
        class="w-full md:hidden"
        src="https://i.ibb.co/L039qbN/Rectangle-10.png"
        alt="dress"
      />
    </div>
    <div class="border-b border-gray-200 md:flex-row flex-col flex justify-between items-start w-full pb-8 space-y-4 md:space-y-0">
      <div class="w-full flex flex-col justify-start items-start space-y-8">
        <h3 class="text-xl dark:text-white xl:text-2xl font-semibold leading-6 text-gray-800">
          Producto 01
        </h3>
        <div class="flex justify-start items-start flex-col space-y-2">
          <p class="text-sm dark:text-white leading-none text-gray-800">
            <span class="dark:text-gray-400 text-gray-300">
              Categoría:{" "}
            </span>{" "}
            Ropa
          </p>
          <p class="text-sm dark:text-white leading-none text-gray-800">
            <span class="dark:text-gray-400 text-gray-300">
              Descripcion:{" "}
            </span>{" "}
            Small
          </p>
          <p class="text-sm dark:text-white leading-none text-gray-800">
            <span class="dark:text-gray-400 text-gray-300">
              Estado:{" "}
            </span>{" "}
            Disponible
          </p>
        </div>
      </div>
      <div class="flex justify-between space-x-8 items-start w-full">
        <p class="text-base dark:text-white xl:text-lg leading-6">
          $36.00{" "}
          <span class="text-red-300 line-through"> $45.00</span>
        </p>
        <button>
              <BsDashSquare/>
          </button>
        <p class="text-base dark:text-white xl:text-lg leading-6 text-gray-800">
          0
        </p>
        <button>
              <BsPlusSquare/>
          </button>
        <p class="text-base dark:text-white xl:text-lg font-semibold leading-6 text-gray-800">
          $72.00
        </p>
      </div>
      <div>

      </div>
    </div>
  </div>
  )
}

export default ProductCardShoppingCart