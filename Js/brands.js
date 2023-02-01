const ourBrands = [
  {
    name: "POXIPOL",
    img: "../assets/img/marcas/poxipol.png",
  },
  {
    name: "La gotita",
    img: "../assets/img/marcas/la-gotita.png",
  },
  {
    name: "ÉCCOLE",
    img: "../assets/img/marcas/eccole.png",
  },
  {
    name: "El Pulpito",
    img: "../assets/img/marcas/el-pulpito.png",
  },
  {
    name: "Fastix",
    img: "../assets/img/marcas/fastix.png",
  },
  {
    name: "POXIMIX",
    img: "../assets/img/marcas/poximix.png",
  },
  {
    name: "Poxilina",
    img: "../assets/img/marcas/poxilina.png",
  },
  {
    name: "UNIPOX",
    img: "../assets/img/marcas/unipox.png",
  },
  {
    name: "Voligoma",
    img: "../assets/img/marcas/voligoma.png",
  },
  {
    name: "Novopren",
    img: "../assets/img/marcas/novopren.png",
  },
];

const gridBrands = document.querySelector(".gridBrands");
const productContainer = document.querySelector(".productContainer");

ourBrands.map((brand) => {
  gridBrands.innerHTML += `
      <div class="oneBrand">
        <a href="../views/Marcas-y-Productos/producto.html?brand=${brand.name}"><img src="${brand.img}" alt="${brand.name}"></a> 
      </div>`;
});
