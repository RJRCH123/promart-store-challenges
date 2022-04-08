import React from "react";
import { BsHeart } from "react-icons/bs";

function ProductCardDetail() {
  return (
    <section>
      <div class="flex justify-center p-8 md:flex-row flex-col items-stretch w-full space-y-4 md:space-y-0 md:space-x-6 xl:space-x-8">
        <div class="flex flex-col px-4 py-6 md:p-6 xl:p-8 w-full justify-center items-center bg-gray-50 dark:bg-gray-800 space-y-6">
          <div class="relative max-w-sm bg-white shadow-md rounded-3xl p-2 mx-1 my-3 cursor-pointer">
            <div class="overflow-x-hidden rounded-2xl relative">
              <div class="flex rounded flex-col">
                <div class="bg-red-500 text-white w-1/4 text-center rounded-r-xl">
                  30% dsct.
                </div>
                <button className=" absolute rounded-full right-0 top-0 h-8 w-8 bg-gray-200 flex justify-center items-center p-2 cursor-pointer group hover:text-red-500 hover:bg-gray-100">
                  <BsHeart />
                </button>
                <img
                  class="h-40 rounded-2xl object-cover"
                  src="https://pixahive.com/wp-content/uploads/2020/10/Gym-shoes-153180-pixahive.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col justify-center px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 dark:bg-gray-800 space-y-6">
          <h3 class="text-xl dark:text-white font-semibold leading-5 text-gray-800">
            Producto Name
          </h3>
          <div class="flex items-center mt-2.5 mb-5">
            <svg
              class="w-5 h-5 text-yellow-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg
              class="w-5 h-5 text-yellow-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg
              class="w-5 h-5 text-yellow-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg
              class="w-5 h-5 text-yellow-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg
              class="w-5 h-5 text-yellow-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
              5.0
            </span>
          </div>
          <h6 class="text-xl dark:text-white font-semibold leading-5 text-gray-800">
            Descripción
          </h6>
          <p>
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            officiis incidunt optio quam odio illum, delectus quo praesentium
            sequi eum eaque. Dolorum exercitationem necessitatibus illum, dicta
            ipsum aperiam asperiores impedit?{" "}
          </p>
          <h6 class="text-xl dark:text-white font-semibold leading-5 text-gray-800">
            Categoria
          </h6>
          <p class="text-md text-gray-800 mt-0">Ropa</p>
          <h6 class="text-xl dark:text-white font-semibold leading-5 text-gray-800">
            Precio
          </h6>
          <p class="text-md text-gray-800 mt-0">$340</p>
          <h6 class="text-xl dark:text-white font-semibold leading-5 text-gray-800">
            Estado
          </h6>
          <p class="text-md text-gray-800 mt-0">Disponible</p>
          <div class="flex flex-col-reverse group cursor-pointer">
            <a
              href="w"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 rounded-lg mx-1 text-xs px-2 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              {" "}
              Añadir a Carrito
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductCardDetail;
