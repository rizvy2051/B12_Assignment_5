const heartCountEl = document.getElementById("heart-count");
const coinCountEl  = document.getElementById("coin-count");
const copyCountEl  = document.getElementById("copy-count");

let hearts = 0;
let coins  = 100;
let copies = 0;

document.querySelectorAll(".card").forEach(card => {
  const heartIcon   = card.querySelector(".heart-icon");
  const nameEl      = card.querySelector(".service-name");
  const numberEl    = card.querySelector(".service-number");
  const copyBtn     = card.querySelector(".copy-btn");
  const callBtn     = card.querySelector(".call-btn");

  const serviceName   = nameEl.textContent.trim();
  const serviceNumber = numberEl.textContent.trim();
// Heart Button Start
  heartIcon.addEventListener("click", () => {
    hearts++;
    heartCountEl.textContent = hearts;
  });
// Copy Button Start
  copyBtn.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(serviceNumber);
      copies++;
      copyCountEl.textContent = copies;
      alert(`Copied ${serviceNumber} from ${serviceName}`);
    } catch {
      alert("Copy failed. Please try again.");
    }
  });
// Call Button Start
  callBtn.addEventListener("click", () => {
    if (coins < 20) {
      alert("Not enough coins (need 20).");
      return;
    }
    coins -= 20;
    coinCountEl.textContent = coins;
    alert(`Calling ${serviceName} at ${serviceNumber}`);
    addHistory(serviceName, serviceNumber);
  });
});