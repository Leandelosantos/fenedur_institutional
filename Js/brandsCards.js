const brands = [
  {
    img: "../assets/img/cuadrados/fastix.jpg",
    name: "Fastix",
  },
  {
    img: "../assets/img/cuadrados/laGotita.jpg",
    name: "La Gotita",
  },
];

const gridBrands = document.querySelector(".gridBrands");

brands.forEach((brand) => {
  gridBrands.innerHTML += `
        <div class="cardBrand">
            <img src="${brand.img}" alt="fastix">
            ${brand.name}
            <a href="#">
                <button>Ir a web</button>
            </a>
            <a href="#">
                <button>Ver Marca</button>
            </a>
        </div>`;
});
