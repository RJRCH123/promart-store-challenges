import React from "react";
import ProductCard from "./productCard";
function Products() {
  return (
    <div class="mx-auto container">
      <div class=" bg-white rounded flex items-center w-full p-3 shadow-sm border border-gray-200">
        <button class="outline-none focus:outline-none">
          <svg
            class=" w-5 text-gray-600 h-5 cursor-pointer"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
        </button>
        <input
          type="search"
          name=""
          id=""
          placeholder="Buscar Producto"
          x-model="q"
          class="w-full pl-4 text-sm outline-none focus:outline-none bg-transparent"
        />
        <div class="select">
          <select
            name=""
            id=""
            x-model="image_type"
            class="text-sm outline-none focus:outline-none bg-transparent"
          >
            <option value="all" selected>
              All
            </option>
            <option value="electronics">Electronics</option>
            <option value="jewelery">Jewelery</option>
            <option value="men’s clothing">Men’s clothing</option>
            <option value="women’s clothing">Women’s clothing</option>
          </select>
        </div>
      </div>
      <div class="flex flex-wrap items-center lg:justify-between justify-center">
        <ProductCard /> <ProductCard /> <ProductCard /> <ProductCard />{" "}
        <ProductCard /> <ProductCard /> <ProductCard />
        <ProductCard /> <ProductCard /> <ProductCard /> <ProductCard />{" "}
        <ProductCard />
      </div>
    </div>
  );
}

export default Products;
