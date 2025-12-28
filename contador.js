function updateCountdown() {
  const now = new Date();

  // 🎯 FECHA OBJETIVO: 29 de diciembre a las 00:00
  const targetDate = new Date(2025, 11, 29, 0, 0, 0);
  // Mes 11 = diciembre (los meses empiezan en 0)

  const diff = targetDate - now;

  if (diff <= 0) {
    window.location.replace("melissa.html");
    return;
  }

  const hours = Math.floor(diff / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  document.getElementById("hours").textContent = String(hours).padStart(2, "0");
  document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
  document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");
}

setInterval(updateCountdown, 1000);
updateCountdown();
