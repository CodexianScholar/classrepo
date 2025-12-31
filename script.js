const gauge = document.getElementById("healthGauge");
const numberDisplay = document.getElementById("healthNumber");
const resetButton = document.getElementById("resetBtn");
const restoreButton = document.getElementById("restoreHealth");

let currentHealth = 100;
function changeHealth() {
  const randomChange = Math.floor(Math.random() * 31) - 15;

  currentHealth = currentHealth + randomChange;

  if (currentHealth < 0) {
    currentHealth = 0;
  }

  if (currentHealth > 100) {
    currentHealth = 100;
  }

  gauge.style.height = currentHealth + "px";

  numberDisplay.textContent = currentHealth;
}

resetButton.addEventListener("click", changeHealth);

function restored() {
  const fullHealth = 100;

  gauge.style.height = fullHealth + "px";
  numberDisplay.textContent = fullHealth;
}

restoreButton.addEventListener("click", restored);
