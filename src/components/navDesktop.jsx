import React from "react";
import Logo from "../imgs/Logos/Logo-Ext2.png";
import { BsHeart, BsCart, BsPerson, BsCaretRightFill, BsHouseDoor, BsQuestionCircle, BsGeoAlt, BsInfoCircle } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

function NavDesktop() {
  const navigate = useNavigate();

  return (
    <nav role="navigation" className="bg-white shadow xl:block hidden">
      <div className="mx-auto container px-6 py-2 xl:py-0">
        <div className="flex items-center justify-between">
          <div className="inset-y-0 left-0 flex items-center xl:hidden">
            <div className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-100 focus:outline-none transition duration-150 ease-in-out">
              <div className="visible xl:hidden">
                <ul className="p-2 border-r bg-white absolute rounded left-0 right-0 shadow mt-8 md:mt-8 hidden">
                  <li className="flex xl:hidden cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-grid"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z"></path>
                        <rect x="4" y="4" width="6" height="6" rx="1"></rect>
                        <rect x="14" y="4" width="6" height="6" rx="1"></rect>
                        <rect x="4" y="14" width="6" height="6" rx="1"></rect>
                        <rect x="14" y="14" width="6" height="6" rx="1"></rect>
                      </svg>
                      <span className="ml-2 font-bold">Dashboard</span>
                    </div>
                  </li>
                  <li
                    className=" xl:hidden flex-col cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none flex justify-center"
                    onclick="dropdownHandler(this)"
                  >
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-puzzle"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z"></path>
                        <path d="M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1"></path>
                      </svg>
                      <span className="ml-2 font-bold">Productos</span>
                    </div>
                  </li>
                  <li className=" xl:hidden cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 flex items-center focus:text-indigo-700 focus:outline-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-compass"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z"></path>
                      <polyline points="8 16 10 10 16 8 14 14 8 16"></polyline>
                      <circle cx="12" cy="12" r="9"></circle>
                    </svg>
                    <span className="ml-2 font-bold">Performance</span>
                  </li>
                  <li className="border-b border-gray-300 xl:hidden cursor-pointer text-gray-600 text-sm leading-3 tracking-normal pt-2 pb-4 hover:text-indigo-700 flex items-center focus:text-indigo-700 focus:outline-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-code"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z"></path>
                      <polyline points="7 8 3 12 7 16"></polyline>
                      <polyline points="17 8 21 12 17 16"></polyline>
                      <line x1="14" y1="4" x2="10" y2="20"></line>
                    </svg>
                    <span className="ml-2 font-bold">Deliverables</span>
                  </li>
                  <li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 flex items-center focus:text-indigo-700 focus:outline-none">
                    <div className="flex items-center">
                      <div className="w-12 cursor-pointer flex text-sm border-2 border-transparent rounded focus:outline-none focus:border-white transition duration-150 ease-in-out">
                        <img
                          className="rounded h-10 w-10 object-cover"
                          src="https://tuk-cdn.s3.amazonaws.com/assets/components/horizontal_navigation/hn_1.png"
                          alt="logo"
                        />
                      </div>
                      <p className="text-sm ml-2 cursor-pointer">Jane Doe</p>
                      <div className="sm:ml-2 text-white relative">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-chevron-down cursor-pointer"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z"></path>
                          <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                      </div>
                    </div>
                  </li>
                  <li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-user"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <circle cx="12" cy="7" r="4" />
                        <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                      </svg>
                      <span className="ml-2">Profile</span>
                    </div>
                  </li>
                </ul>
                <svg
                  onclick="MenuHandler(this,true)"
                  aria-haspopup="true"
                  aria-label="Main Menu"
                  xmlns="http://www.w3.org/2000/svg"
                  className="show-m-menu icon icon-tabler icon-tabler-menu"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z"></path>
                  <line x1="4" y1="8" x2="20" y2="8"></line>
                  <line x1="4" y1="16" x2="20" y2="16"></line>
                </svg>
              </div>
              <div
                className="hidden close-m-menu text-gray-700"
                onclick="MenuHandler(this,false)"
              >
                <svg
                  aria-label="Close"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </div>
            </div>
          </div>
          <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 rounded-md flex w-full sm:w-auto items-center sm:items-stretch justify-end sm:justify-start">
            <div className="flex items-center">
              <g>
                <path
                  fill="#4c51bf"
                  d="m234.735 35.532c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16zm0 24c-4.412 0-8-3.588-8-8s3.588-8 8-8 8 3.588 8 8-3.588 8-8 8zm-62.529-14c0-2.502 2.028-4.53 4.53-4.53s4.53 2.028 4.53 4.53c0 2.501-2.028 4.529-4.53 4.529s-4.53-2.027-4.53-4.529zm89.059 60c0 2.501-2.028 4.529-4.53 4.529s-4.53-2.028-4.53-4.529c0-2.502 2.028-4.53 4.53-4.53s4.53 2.029 4.53 4.53zm-40.522-5.459-88-51.064c-1.242-.723-2.773-.723-4.016 0l-88 51.064c-1.232.715-1.992 2.033-1.992 3.459v104c0 1.404.736 2.705 1.938 3.428l88 52.936c.635.381 1.35.572 2.062.572s1.428-.191 2.062-.572l88-52.936c1.201-.723 1.938-2.023 1.938-3.428v-104c0-1.426-.76-2.744-1.992-3.459zm-90.008-42.98 80.085 46.47-52.95 31.289-23.135-13.607v-21.713c0-2.209-1.791-4-4-4s-4 1.791-4 4v21.713l-26.027 15.309c-1.223.719-1.973 2.029-1.973 3.447v29.795l-52 30.727v-94.688zm0 198.707-80.189-48.237 51.467-30.412 24.723 14.539v19.842c0 2.209 1.791 4 4 4s4-1.791 4-4v-19.842l26.027-15.307c1.223-.719 1.973-2.029 1.973-3.447v-31.667l52-30.728v94.729z"
                />
              </g>
              <img className="h-8 hidden sm:block" src={Logo} alt="Promart" />
            </div>
          </button>
          <div className="flex">
            <div className="hidden xl:flex md:mr-6 xl:mr-16">
              <a
                href="/productos"
                className="focus:text-indigo-700 border-b-2 border-transparent focus:border-indigo-700 flex px-5 items-center py-6 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none transition duration-150 ease-in-out"
              >
                <span className="mr-2">
                <BsHouseDoor className="h-6 w-6"/>
                </span>
                
                Productos
              </a>
              <a
                href="/productos"
                className="focus:text-indigo-700 border-b-2 border-transparent focus:border-indigo-700 flex px-5 items-center py-6 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none transition duration-150 ease-in-out"
              >
                <span className="mr-2">
                  <BsGeoAlt className="h-6 w-6"/>
                </span>
                Sucursales
              </a>
              <a
                href="/productos"
                className="focus:text-indigo-700 border-b-2 border-transparent focus:border-indigo-700 flex px-5 items-center py-6 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none transition duration-150 ease-in-out"
              >
                <span className="mr-2">
                <BsInfoCircle className="h-6 w-6"/>
                </span>
                Sobre Nosotros
              </a>
              <a
                href="/productos"
                className="focus:text-indigo-700 border-b-2 border-transparent focus:border-indigo-700 flex px-5 items-center py-6 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none transition duration-150 ease-in-out"
              >
                <span className="mr-2">
                <BsQuestionCircle className="h-6 w-6"/>
                </span>
                Preguntas Frecuentes
              </a>

              <a
                href="/productos"
                className="focus:text-indigo-700 border-b-2 border-transparent focus:border-indigo-700 flex px-5 items-center py-6 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none transition duration-150 ease-in-out hover:text-red-500"
              >
                <span className="mr-2 grid grid-cols-2 items-center">
                  <BsCaretRightFill />
                  <BsPerson className="h-6 w-6" />
                </span>
                Nombre de Usuario
              </a>
              <div className="px-5 items-center grid gap-4 grid-cols-2">
                <div class="flex rounded-full right-0 top-0 h-8 w-8 justify-center items-center p-2 cursor-pointer group">
                  <button className=" rounded-full right-0 top-0 h-8 w-8 bg-gray-200 flex justify-center items-center p-2 cursor-pointer group hover:text-red-500 hover:bg-gray-100">
                    <BsHeart />
                  </button>
                  <div>
                    <p class="text-red-500 absolute">0</p>
                  </div>
                </div>

                <div class="flex rounded-full right-0 top-0 h-8 w-8 justify-center items-center p-2 cursor-pointer group">
                  <button onClick={() => navigate(`/carro-de-compras`)} className=" rounded-full right-0 top-0 h-8 w-8 bg-gray-200 flex justify-center items-center p-2 cursor-pointer group hover:text-red-500 hover:bg-gray-100">
                  <BsCart />
                  </button>
                  <div>
                    <p class="text-red-500 absolute">0</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavDesktop;
