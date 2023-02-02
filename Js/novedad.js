const novedades = [
  {
    id: "Uruguay",
    date: "Febrero 2020",
    title: "Carnaval con ECCOLE&#174; ¡A todo ritmo!",
    text: "Vitto inauguró este carnaval desfilando por la avenida 18 de Julio, con transmisión televisiva. Además, estuvo de gira por los 40 tablados de Montevideo y Ciudad de la Costa, saludando a la gente y entregando merchandasing.",
    img: "../assets/img/nov-uruguay.png",
  },
  {
    id: "Rumania",
    date: "Julio 2022",
    title: "Campaña de Picatura® en Rumania En Rumania",
    text: "En Rumania el 21 de febrero comenzamos la campaña de Picatura®, con los cuatro comerciales de televisión y radio. Te invitamos a ver los comerciales.",
    img: "../assets/img/nov-rumania.png",
  },
  {
    id: "Internacional",
    date: "Mayo 2022",
    title: "POXIPOL® con nuevo look",
    text: "¡Nueva imagen POXIPOL® para ser mas competitivo en los mercados! Se agregan nuevas viñetas que apoyan los atributos de la marca. ¡Ademas se renueva el slogan! ... Y MUY PRONTO ¡NUEVO COMERCIAL DE TV!",
    img: "../assets/img/nov-poxi.png",
  },
];

const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get("nov");
const nov = novedades.find((element) => element.id === myParam);
const newsDiv = document.querySelector(".newsDiv-new");
const img = document.getElementById("img-nov");
newsDiv.innerHTML += `
            <p>${nov.id}</p>
            <p>${nov.date}</p>
            <h2>${nov.title}</h2>
            <p>${nov.text}</p>
`;

img.setAttribute("src", `${nov.img}`);
