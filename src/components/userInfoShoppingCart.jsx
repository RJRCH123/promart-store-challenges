import React from 'react'
import { BsPerson } from "react-icons/bs";

function UserInfoShoppingCart() {
  return (
    <div class="bg-gray-50 dark:bg-gray-800 w-full xl:w-96 flex justify-between items-center md:items-start px-4 py-6 md:p-6 xl:p-8 flex-col">
    <h3 class="text-xl dark:text-white font-semibold leading-5 text-gray-800">
      Comprador
    </h3>
    <div class="flex flex-col md:flex-row xl:flex-col justify-start items-stretch h-full w-full md:space-x-6 lg:space-x-8 xl:space-x-0">
      <div class="flex flex-col justify-start items-start flex-shrink-0">
        <div class="flex justify-center w-full md:justify-start items-center space-x-4 py-8 border-b border-gray-200">
          <BsPerson />
          <div class="flex justify-start items-start flex-col space-y-2">
            <p class="text-base dark:text-white font-semibold leading-4 text-left text-gray-800">
              Rosamaria Rodriguez
            </p>
            <p class="text-sm dark:text-gray-300 leading-5 text-gray-600">
              20 ordenes previas
            </p>
          </div>
        </div>

        <div class="flex justify-center text-gray-800 dark:text-white md:justify-start items-center space-x-4 py-4 border-b border-gray-200 w-full">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5Z"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M3 7L12 13L21 7"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <p class="cursor-pointer text-sm leading-5 ">
            rous9716@gmail.com
          </p>
        </div>
      </div>
      <div class="flex justify-between xl:h-full items-stretch w-full flex-col mt-6 md:mt-0">
        <div class="flex justify-center md:justify-start xl:flex-col flex-col md:space-x-6 lg:space-x-8 xl:space-x-0 space-y-4 xl:space-y-12 md:space-y-0 md:flex-row items-center md:items-start">
          <div class="flex justify-center md:justify-start items-center md:items-start flex-col space-y-4 xl:mt-8">
            <p class="text-base dark:text-white font-semibold leading-4 text-center md:text-left text-gray-800">
              Dirección de envío
            </p>
            <p class="w-48 lg:w-full dark:text-gray-300 xl:w-48 text-center md:text-left text-sm leading-5 text-gray-600">
              Av. Huaylas Mz 5 Lote 36, AAHH Laura Caller
            </p>
          </div>
          <div class="flex justify-center md:justify-start items-center md:items-start flex-col space-y-4">
            <p class="text-base dark:text-white font-semibold leading-4 text-center md:text-left text-gray-800">
              Departamento / Distrito
            </p>
            <p class="w-48 lg:w-full dark:text-gray-300 xl:w-48 text-center md:text-left text-sm leading-5 text-gray-600">
              Lima / Los Olivos
            </p>
          </div>
        </div>
        <div class="flex mt-6 w-full justify-center items-center md:justify-start md:items-start">
          <button class="md:mt-0 rounded-lg shadow-md dark:bg-transparent dark:text-white py-5 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-700 border border-red-500 font-medium w-96 2xl:w-full text-base leading-4 text-red-500">
            Editar Información
          </button>
        </div>
        <div class="flex mt-5 w-full justify-center items-center md:justify-start md:items-start">
          <button class="mt-6 md:mt-0 rounded-lg shadow-md dark:bg-transparent dark:text-red-500 hover:bg-red-700 py-5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-700 border bg-red-500 font-medium w-96 2xl:w-full text-base leading-4 text-white">
            Pagar Pedido
          </button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default UserInfoShoppingCart