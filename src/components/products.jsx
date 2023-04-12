import React from "react";
import ProductCard from "./productCard";
function Products() {
  const productsList = [
    {
      img:"https://rosenpe.vteximg.com.br/arquivos/ids/189308-450-450/Funda-Plum-n-Timeless-Print-Claire-Queen-1-4421.jpg?v=637847879878570000",
      dscto:20,
      price:"250.00",
      name:"Cubrecama Plumón King"
    },
    {
      img:"https://rosenpe.vteximg.com.br/arquivos/ids/189383-450-450/Plum-n-Stamp-Stitch-Brunnera-Queen-1-4371.jpg?v=637847880118830000",
      dscto:5,
      price:"325.98",
      name:"Cubrecama Plumón 2 Plz"
    },
    {
      img:"https://rosenpe.vteximg.com.br/arquivos/ids/189341-450-450/Funda-Plum-n-Collection-Prt-Braunau-2-Plazas-1-4411.jpg?v=637847879978370000",
      dscto:20,
      price:"150.50",
      name:"Cubrecama Plumón 1 Plz"
    },
    {
      img:"https://rosenpe.vteximg.com.br/arquivos/ids/189382-450-450/Plum-n-Stamp-Stitch-Brunnera-2-Plazas-1-4337.jpg?v=637847880115230000",
      dscto:20,
      price:"96.00",
      name:"Cubrecama Sintética 2 Plz"
    },
    {
      img:"https://rosenpe.vteximg.com.br/arquivos/ids/187312/Juego-Seccional-Guadalmina-4-piezas-31-3961.jpg?v=637807161636970000",
      dscto:20,
      price:"1099.50",
      name:"Procuto 3"
    },
    {
      img:"https://rosenpe.vteximg.com.br/arquivos/livingestar_sofas.jpg?v=636343519445500000",
      dscto:20,
      price:"2500.00",
      name:"Procuto 1"
    },
    {
      img:"https://rosenpe.vteximg.com.br/arquivos/ids/178650-450-450/Reposera-Kotor-Negra-2-2658.jpg?v=637400196103830000",
      dscto:5,
      price:"1860.98",
      name:"Procuto 2"
    },
    {
      img:"https://rosenpe.vteximg.com.br/arquivos/livingestar_poltronas.jpg?v=636343519524400000",
      dscto:20,
      price:"5920.50",
      name:"Procuto 3"
    },
    {
      img:"https://rosenpe.vteximg.com.br/arquivos/livingestar_mesasliving.jpg?v=636343519557370000",
      dscto:5,
      price:"3200.98",
      name:"Procuto 2"
    },
  ];
  return (
    <div class="mx-auto container">
      <div class=" bg-white rounded flex items-center w-full p-3 mt-4 shadow-sm border border-gray-200">
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
              Todos
            </option>
            <option value="Muebles">Muebles</option>
            <option value="Terraza">Terraza</option>
            <option value="Dormitorio">Dormitorio</option>
            <option value="Otros">Otros</option>
          </select>
        </div>
      </div>
      <div class="flex flex-wrap items-center p-10 lg:justify-between justify-center">
        {productsList.map((item, index) => (
          <ProductCard
            id={index}
            img={item.img}
            dscto={item.dscto}
            price={item.price}
            name={item.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Products;
