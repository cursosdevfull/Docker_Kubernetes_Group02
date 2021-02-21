const mb1 = document.querySelector(".mensaje_backend1");
const mb2 = document.querySelector(".mensaje_backend2");

mb1.innerHTML = "Aquí va el mensaje desde el backend1";
mb2.innerHTML = "Aquí va el mensaje desde el backend2";

fetch("/api/config")
  .then((res) => res.json())
  .then((info) => fetch(info.backend1 + "/message"))
  .then((res) => res.json())
  .then((info) => {
    mb1.innerHTML = info.message1;
    mb2.innerHTML = info.message2;
  });
