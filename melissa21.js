/* ============================= */
/* LOADER CON CORAZONES FLOTANTES */
/* ============================= */

window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  const left = document.querySelector(".hearts.left");
  const right = document.querySelector(".hearts.right");

  function createHeart(container) {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.textContent = "❤️";

    heart.style.left = Math.random() * 100 + "%";
    heart.style.fontSize = 16 + Math.random() * 20 + "px";
    heart.style.animationDuration = 4 + Math.random() * 4 + "s";

    container.appendChild(heart);

    setTimeout(() => heart.remove(), 8000);
  }

  const interval = setInterval(() => {
    createHeart(left);
    createHeart(right);
  }, 400);

  // Quitar loader tras 10 segundos
  setTimeout(() => {
    clearInterval(interval);
    loader.style.opacity = "0";
    loader.style.transition = "opacity 1s ease";

    setTimeout(() => {
      loader.remove();
    }, 1000);
  }, 10000);
});

/* ============================= */
/* CÓDIGO DEL CARRUSEL            */
/* ============================= */

const startBtn = document.getElementById("startBtn");
const intro = document.getElementById("intro");
const slider = document.getElementById("slider");
const img = document.getElementById("slideImage");
const text = document.getElementById("slideText");
const music = document.getElementById("bgMusic");

const slides = [
  { img: "images/1.jpeg", text: "Bueno ❤️" },
  { img: "images/2.jpeg", text: "Menudo careto tenía(tu preciosa)" },
  { img: "images/3.jpeg", text: "Me encanta esta foto" },
  { img: "images/4.jpeg", text: "Y esta" },
  { img: "images/5.jpeg", text: "Gracias por ser como eres" },
  { img: "images/6.jpeg", text: "Literal es la primera foto que tengo nuestr6" },
  { img: "images/7.jpeg", text: "Escogí fotos de las más antiguas" },
  { img: "images/8.jpeg", text: "No tan antiguas pero se merecía estar❤️" },
  { img: "images/9.jpeg", text: "Buenos tiempos...en el cumple de Lore" },
  { img: "images/10.jpeg", text: "Olee mi morenota ❤️" },
  { img: "images/11.jpeg", text: "No quería que esto fuese a parecer repetitivo" },
  { img: "images/12.jpeg", text: "De ahí que quise escoger estas fotos" },
  { img: "images/13.jpeg", text: "Para recordar como empezamos❤️" },
  { img: "images/14.jpeg", text: "Que lindos" },
  { img: "images/15.jpeg", text: "x2" },
  { img: "images/16.jpeg", text: "x3" },
  { img: "images/17.jpeg", text: "x4" },
  { img: "images/18.jpeg", text: "Esta foto me encanta, sin duda una de mis favoritas" },
  { img: "images/19.jpeg", text: "..." },
  { img: "images/20.jpeg", text: "Si hubieses sido Sandrita, na es broma jeje" },
  { img: "images/21.jpeg", text: "Hubiese quedado mejor en un porsche, semejante mujeron..." },
  { img: "images/22.jpeg", text: "Esa mirada no miente❤️" }
];

// Imagen final y texto
const finalSlide = {
  img: "images/23.jpeg", // tu imagen estática final
  text: "Te quiero mucho❤️ Felices 21❤️ Por muchos más años futura madre de mis hijos❤️"
};

let index = 0;
const duration = 6000; // 6 segundos por imagen

startBtn.addEventListener("click", () => {
  intro.classList.add("hidden");
  slider.classList.remove("hidden");

  // Música con fade-in
  music.volume = 0;
  music.play();
  let targetVolume = 0.6;
  let step = 0.02;
  let fade = setInterval(() => {
    if(music.volume < targetVolume){
      music.volume = Math.min(music.volume + step, targetVolume);
    } else {
      clearInterval(fade);
    }
  }, 100);

  showSlide();
  const slideInterval = setInterval(() => {
    if (index >= slides.length) {
      clearInterval(slideInterval); // detenemos el carrusel
    }
    showSlide();
  }, duration);
});

function showSlide() {
  img.classList.remove("show");
  text.classList.remove("show");

  setTimeout(() => {
    // Mostrar imagen final si ya pasamos todas las slides
    if (index >= slides.length) {
      img.src = finalSlide.img;
      text.textContent = finalSlide.text;
      img.classList.add("show");
      text.classList.add("show");
      return;
    }

    // Carrusel normal
    img.src = slides[index].img;
    text.textContent = slides[index].text;

    img.classList.add("show");
    text.classList.add("show");

    index++;
  }, 500);
}


