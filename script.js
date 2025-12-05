let timer = 100; // Start countdown from 100 seconds
let smilies = 0;
let smiliesPerClick = 1;
let upgradeCost = 10;

const timerElement = document.getElementById("timer");
const smiliesElement = document.getElementById("smilies");
const smiliesPerClickElement = document.getElementById("smiliesPerClick");
const upgradeButton = document.getElementById("upgradeButton");
const gameElement = document.getElementById("game");
const countdownElement = document.getElementById("countdown");

function startCountdown() {
  const countdownInterval = setInterval(() => {
    timer--;
    timerElement.textContent = timer;

    if (timer <= 0) {
      clearInterval(countdownInterval);
      countdownElement.style.display = "none";
      gameElement.style.display = "block";
    }
  }, 1000);
}

function handleSmileyClick() {
  smilies += smiliesPerClick;
  smiliesElement.textContent = smilies;
  checkUpgradeAvailability();
}

function checkUpgradeAvailability() {
  if (smilies >= upgradeCost) {
    upgradeButton.style.display = "inline-block";
  }
}

function upgrade() {
  if (smilies >= upgradeCost) {
    smilies -= upgradeCost;
    smiliesPerClick++;
    smiliesElement.textContent = smilies;
    smiliesPerClickElement.textContent = smiliesPerClick;
    upgradeButton.style.display = "none"; // Hide upgrade button after purchase
  }
}

document.getElementById("smiley").addEventListener("click", handleSmileyClick);
upgradeButton.addEventListener("click", upgrade);

startCountdown();
