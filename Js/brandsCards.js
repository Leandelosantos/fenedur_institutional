const brands = [
  {
    img: "../assets/img/cuadrados/fastix.jpg",
    name: "Fastix &#174;",
  },
  {
    img: "../assets/img/cuadrados/laGotita.jpg",
    name: "La Gotita &#174;",
  },
];

const gridBrands = document.querySelector(".gridBrands");

brands.forEach((brand) => {
  gridBrands.innerHTML += `
        <div class="cardBrand">
            <img src="${brand.img}" alt="fastix">
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
