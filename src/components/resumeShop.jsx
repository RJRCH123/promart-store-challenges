import React from 'react'

function ResumeShop() {
  return (
    <div class="flex justify-center  md:flex-row flex-col items-stretch w-full space-y-4 md:space-y-0 md:space-x-6 xl:space-x-8">
            <div class="flex flex-col px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 dark:bg-gray-800 space-y-6">
              <h3 class="text-xl dark:text-white font-semibold leading-5 text-gray-800">
                Resumen de Compra
              </h3>
              <div class="flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b pb-4">
                <div class="flex justify-between w-full">
                  <p class="text-base dark:text-white leading-4 text-gray-800">
                    Subtotal
                  </p>
                  <p class="text-base dark:text-gray-300 leading-4 text-gray-600">
                    $56.00
                  </p>
                </div>
                <div class="flex justify-between items-center w-full">
                  <p class="text-base dark:text-white leading-4 text-gray-800">
                    Descuento{" "}
                    <span class="bg-gray-200 p-1 text-xs font-medium dark:bg-white dark:text-gray-800 leading-3 text-gray-800">
                      Vip
                    </span>
                  </p>
                  <p class="text-base dark:text-gray-300 leading-4 text-gray-600">
                    -$28.00 (50%)
                  </p>
                </div>
                <div class="flex justify-between items-center w-full">
                  <p class="text-base dark:text-white leading-4 text-gray-800">
                    IGV
                  </p>
                  <p class="text-base dark:text-gray-300 leading-4 text-gray-600">
                    $8.00
                  </p>
                </div>
              </div>
              <div class="flex justify-between items-center w-full">
                <p class="text-base dark:text-white font-semibold leading-4 text-gray-800">
                  Total
                </p>
                <p class="text-base dark:text-gray-300 font-semibold leading-4 text-gray-600">
                  $36.00
                </p>
              </div>
            </div>
            <div class="flex flex-col justify-center px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 dark:bg-gray-800 space-y-6">
              <h3 class="text-xl dark:text-white font-semibold leading-5 text-gray-800">
                ¿Desea servicio Delivery?
              </h3>
              <div class="flex justify-between items-start w-full">
                <div class="flex justify-center items-center space-x-4">
                  <div class="w-8 h-8">
                    <img
                      class="w-full h-full"
                      alt="logo"
                      src="https://i.ibb.co/L8KSdNQ/image-3.png"
                    />
                  </div>
                  <div class="flex flex-col justify-start items-center">
                    <p class="text-lg leading-6 dark:text-white font-semibold text-gray-800">
                      Un solo precio
                      <br />
                      <span class="font-normal">De 24 a 72 Horas</span>
                    </p>
                  </div>
                </div>
                <p class="text-lg font-semibold leading-6 dark:text-white text-gray-800">
                  $12.00
                </p>
              </div>
              <div class="w-full flex justify-center items-center">
                <button class="hover:bg-black rounded-lg shadow-md dark:bg-white dark:text-gray-800 dark:hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 py-5 w-96 md:w-full bg-gray-800 text-base font-medium leading-4 text-white">
                  Agregar a boleta
                </button>
              </div>
            </div>
          </div>
  )
}

export default ResumeShop