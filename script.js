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
function shoot(side){

  if(shots <= 0) return;

  const ball = document.getElementById("ball");
  const keeper = document.getElementById("keeper");

  // Ball animation
  ball.style.transition = "transform 0.6s ease";

  if(side==="left"){
  ball.style.transform="translate(-420px,-450px) scale(0.5)";
}
else if(side==="center"){
  ball.style.transform="translate(-60px,-450px) scale(0.5)";
}
else{
  ball.style.transform="translate(230px,-450px) scale(0.5)";
}

  // Goalkeeper movement
  let saveSide;

  if(Math.random() < 0.4){
    saveSide = side;
  }else{
    let dirs=["left","center","right"].filter(x=>x!==side);
    saveSide = dirs[Math.floor(Math.random()*2)];
  }

  if (saveSide === "left") {
  keeper.style.transform = "translateX(-300px)";
}
else if (saveSide === "center") {
  keeper.style.transform = "translateX(40)";
}
else {
  keeper.style.transform = "translateX(300px)";
}

  setTimeout(()=>{

    if(side===saveSide){
      document.getElementById("result").innerText="🧤 SAVED!";
    }else{
      goals++;
      document.getElementById("result").innerText="⚽ GOAL!";
    }

    shots--;

    document.getElementById("score").innerText=goals;
    document.getElementById("shots").innerText=shots;

    // Reset ball
    ball.style.transform="translateX(-50%)";
    keeper.style.transform = "translateX(0)";

    if(shots===0){
      setTimeout(()=>{
        alert("Game Over!\nGoals: "+goals);
        location.reload();
      },500);
    }

  },600);

}


// ======================
// Swipe Control
// ======================

const ball=document.getElementById("ball");

let startX=0;
let startY=0;

ball.addEventListener("touchstart",function(e){

  e.preventDefault();

  startX=e.touches[0].clientX;
  startY=e.touches[0].clientY;

},{passive:false});

ball.addEventListener("touchend",function(e){

  e.preventDefault();

  let endX=e.changedTouches[0].clientX;
  let endY=e.changedTouches[0].clientY;

  let dx=endX-startX;
  let dy=startY-endY;

  if(dy<30) return;

  if(dx<-40){
    shoot("left");
  }else if(dx>40){
    shoot("right");
  }else{
    shoot("center");
  }

},{passive:false});
