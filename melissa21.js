const startBtn = document.getElementById("startBtn");
const intro = document.getElementById("intro");
const slider = document.getElementById("slider");
const img = document.getElementById("slideImage");
const text = document.getElementById("slideText");
const music = document.getElementById("bgMusic");

const slides = [
  { img: "images/1.jpeg", text: "Nuestro primer recuerdo juntos ❤️" },
  { img: "", text: "Cada momento contigo es especial" },
  { img: "", text: "Siempre sacándome una sonrisa" },
  { img: "", text: "Viajes, risas y locuras" },
  { img: "", text: "Gracias por ser como eres" },
  { img: "", text: "A tu lado todo es mejor" },
  { img: "", text: "Momentos que guardo para siempre" },
  { img: "", text: "Eres mi lugar seguro" },
  { img: "", text: "Lo nuestro es único" },
  { img: "", text: "Te quiero más de lo que imaginas ❤️" }
];

let index = 0;
const duration = 7000; // 7 segundos por imagen

startBtn.addEventListener("click", () => {
  intro.classList.add("hidden");
  slider.classList.remove("hidden");

  // Música con fade-in
  music.volume = 0;
  music.play();
  let targetVolume = 0.6;
  let step = 0.02; // sube 0.02 cada 100ms
  let fade = setInterval(() => {
    if(music.volume < targetVolume){
      music.volume = Math.min(music.volume + step, targetVolume);
    } else {
      clearInterval(fade);
    }
  }, 100);

  showSlide();
  setInterval(showSlide, duration);
});

function showSlide() {
  img.classList.remove("show");
  text.classList.remove("show");

  setTimeout(() => {
    img.src = slides[index].img;
    text.textContent = slides[index].text;

    img.classList.add("show");
    text.classList.add("show");

    index = (index + 1) % slides.length;
  }, 500);
}
