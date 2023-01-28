const ourBrandsDropdown = [
  {
    name: "Poxipol",
    img: "../../assets/img/marcas/poxipol.png",
  },
  {
    name: "LaGotita",
    img: "../../assets/img/marcas/laGotita.png",
  },
  {
    name: "Eccole",
    img: "../../assets/img/marcas/eccole.png",
  },
  {
    name: "ElPulpito",
    img: "../../assets/img/marcas/elPulpito.png",
  },
  {
    name: "Fastix",
    img: "../../assets/img/marcas/fastix.png",
  },
  {
    name: "Poximix",
    img: "../../assets/img/marcas/poximix.png",
  },
  {
    name: "Poxilina",
    img: "../../assets/img/marcas/poxilina.png",
  },
  {
    name: "Unipox",
    img: "../../assets/img/marcas/unipox.png",
  },
  {
    name: "Voligoma",
    img: "../../assets/img/marcas/voligoma.png",
  },
  {
    name: "Novopren",
    img: "../../assets/img/marcas/novopren.png",
  },
];

const btnBrands = document.getElementById("btnBrands");
const gridBrandsDropdown = document.querySelector(".gridBrandsDropdown");

btnBrands.addEventListener("click", (e) => {
  gridBrandsDropdown.classList.toggle("gridBrandsDropdown-grey");
});

ourBrandsDropdown.map((brand) => {
  gridBrandsDropdown.innerHTML += `
      <div class="oneBrand">
        <a href="../Marcas-y-Productos/producto.html?brand=${brand.name}"><img src="${brand.img}" alt="${brand.name}"></a> 
      </div>`;
});
