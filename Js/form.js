const btn = document.getElementById("button");

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  btn.value = "Sending...";

  const serviceID = "default_service";
  const templateID = "template_w0lp1gg";

  emailjs.sendForm(serviceID, templateID, this).then(
    () => {
      btn.value = "Send Email";
      alert("Enviado! Gracias por tu consulta");
      const form = document.getElementById("form");
      form.reset();
    },
    (err) => {
      btn.value = "Send Email";
      alert(JSON.stringify(err));
    }
  );
});

$(".menu-ul>li>a").on("click", function () {
  $(".menu").collapse("hide");
});

const data = document.querySelector(".carousel-indicators");
console.log(data.attributes);
