const brands = [
  {
    img: "",
    name: "Poxipol",
  },
  {
    img: "",
    name: "La gotita",
  },
  {
    img: "",
    name: "La gotita rusa",
  },
  {
    img: "",
    name: "Picatura",
  },
  {
    img: "",
    name: "kropelka",
  },
  {
    img: "",
    name: "kanka",
  },
  {
    img: "",
    name: "eccole",
  },
  {
    img: "",
    name: "tadam",
  },
  {
    img: "",
    name: "tac-pac",
  },
  {
    img: "",
    name: "El Pulpito",
  },
  {
    img: "",
    name: "Osmiorniczka",
  },
  {
    img: "",
    name: "Fastix",
  },
  {
    img: "",
    name: "Poximix",
  },
  {
    img: "",
    name: "Poxilina",
  },
  {
    img: "",
    name: "Unipox",
  },
  {
    img: "",
    name: "Voligoma",
  },
];

const gridBrands = document.querySelector(".gridBrands");

brands.forEach((brand) => {
  gridBrands.innerHTML += `
    <div class="brand">
        <a href="#"><img src="${brand.img}" alt="${brand.name}"></a>
    </div>`;
});
