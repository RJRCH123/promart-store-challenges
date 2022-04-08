import React from "react";

import ProductCardShoppingCart from "../components/productCardShoppingCart";
import ResumeShop from "../components/resumeShop";
import UserInfoShoppingCart from "../components/userInfoShoppingCart";

function ShoppingCart() {
  return (
    <div class="py-14 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto">
      <div class="flex justify-start item-start space-y-2 flex-col">
        <h1 class="text-3xl dark:text-white lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800">
          Carrito de Compras
        </h1>
        <p class="text-base dark:text-gray-300 font-medium leading-6 text-gray-600">
          21 Marzo 2021 a las 10:34 PM
        </p>
      </div>
      <div class="mt-10 flex flex-col xl:flex-row jusitfy-center items-stretch w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
        <div class="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
          <div class="flex flex-col justify-start items-start dark:bg-gray-800 bg-gray-50 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full">
            <p class="text-lg md:text-xl dark:text-white font-semibold leading-6 xl:leading-5 text-gray-800">
              Productos
            </p>
            <ProductCardShoppingCart />
          </div>
          <ResumeShop />
        </div>
        <UserInfoShoppingCart />
      </div>
    </div>
  );
}

export default ShoppingCart;
