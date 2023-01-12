const brandsUru = [
  {
    img: "../assets/img/cuadrados/fastix.jpg",
    name: "Fastix &#174;",
  },
  {
    img: "../assets/img/cuadrados/laGotita.jpg",
    name: "La Gotita &#174;",
  },
];

const gridBrandsUru = document.querySelector(".gridBrandsUru");

brandsUru.forEach((brand) => {
  gridBrandsUru.innerHTML += `
        <div class="cardBrand">
            <img src="${brand.img}" alt="${brand.name}">
            ${brand.name}
            <div class="buttonsContainer">
              <a href="#">
                  <button class="goWeb">Ir a web</button>
              </a>
              <a href="#">
                  <button class="goBrand">Ver Marca</button>
              </a>
            </div>
        </div>`;
});
