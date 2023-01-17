const ourBrands = [
  {
    name: "Poxipol",
    img: "../assets/img/marcas/poxipol.png",
  },
  {
    name: "LaGotita",
    img: "../assets/img/marcas/laGotita.png",
  },
  {
    name: "Kanynua",
    img: "../assets/img/marcas/kanynua.png",
  },
  {
    name: "Picatura",
    img: "../assets/img/marcas/picatura.png",
  },
  {
    name: "Kropelka",
    img: "../assets/img/marcas/kropelka.png",
  },
  {
    name: "Kanka",
    img: "../assets/img/marcas/kanka.png",
  },
  {
    name: "Eccole",
    img: "../assets/img/marcas/eccole.png",
  },
  {
    name: "Tadam",
    img: "../assets/img/marcas/tadam.png",
  },
  {
    name: "Tacpac",
    img: "../assets/img/marcas/tac-pac.png",
  },
  {
    name: "ElPulpito",
    img: "../assets/img/marcas/elPulpito.png",
  },
  {
    name: "Osmiorniczka",
    img: "../assets/img/marcas/osmio.png",
  },
  {
    name: "Fastix",
    img: "../assets/img/marcas/fastix.png",
  },
  {
    name: "Poximix",
    img: "../assets/img/marcas/poximix.png",
  },
  {
    name: "Poxilina",
    img: "../assets/img/marcas/poxilina.png",
  },
  {
    name: "Unipox",
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

/* siteBrands.map(() => {
  productContainer.innerHTML += `
        <img src="${siteBrands.imgBig}" alt="${siteBrands.name}">
        <h2>${siteBrands.name}&#174; ${siteBrands.boldDesc}</h2>
        <p>Con ${siteBrands.name}&#174; ${siteBrands.desc1}</p>
        <p>${siteBrands.desc2}</p>
        <div class="brandIn">
            <h3>${siteBrands.name}&#174; se comercializa en los principales mercados del mundo.</h3>
            <div class="chooseCountry">Seleccioná un país para ver mas información</div>
            <div class="brandCountry">Paises</div>
        </div>`;
}); */
