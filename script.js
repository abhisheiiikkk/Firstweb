let goals = 0;
let shots = 5;
let soundEnabled = true;

function showPlayers() {
  document.getElementById("home").style.display = "none";
  document.getElementById("players").style.display = "block";
}

function showSettings() {
  document.getElementById("home").style.display = "none";
  document.getElementById("settings").style.display = "block";
}

function goHome() {
  document.getElementById("home").style.display = "block";
  document.getElementById("players").style.display = "none";
  document.getElementById("settings").style.display = "none";
  document.getElementById("game").style.display = "none";
}

function toggleSound() {
  soundEnabled = !soundEnabled;

  if (soundEnabled) {
    alert("🔊 Sound ON");
  } else {
    alert("🔇 Sound OFF");
  }
}

function startGame(player) {

  goals = 0;
  shots = 5;

  document.getElementById("home").style.display = "none";
  document.getElementById("players").style.display = "none";
  document.getElementById("settings").style.display = "none";
  document.getElementById("game").style.display = "block";

  document.getElementById("playerName").innerText = player;
  document.getElementById("score").innerText = goals;
  document.getElementById("shots").innerText = shots;
  document.getElementById("result").innerText = "";
}
