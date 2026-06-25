let goals=0;
let shots=5;

function showPlayers(){
 document.getElementById("home").style.display="none";
 document.getElementById("players").style.display="block";
}

function startGame(player){

 document.getElementById("home").style.display="none";

 document.getElementById("players").style.display="none";

 document.getElementById("game").style.display="block";

 document.getElementById("playerName").innerText=player;

}

function shoot(side){

 if(shots<=0) return;

 let keeper;

if (Math.random() < 0.4) {
  // 40% chance of save
  keeper = side;
} else {
  // 60% chance of goal
  let dirs = ["left","center","right"].filter(d => d !== side);
  keeper = dirs[Math.floor(Math.random() * dirs.length)];
}

 document.getElementById("keeper").style.left =
 keeper==="left" ? "60px" :
 keeper==="center" ? "110px" : "160px";

 if(side!==keeper){
   goals++;
   document.getElementById("result").innerText="⚽ GOAL!";
 }else{
   document.getElementById("result").innerText="🧤 SAVED!";
 }

 shots--;

 document.getElementById("score").innerText=goals;
 document.getElementById("shots").innerText=shots;

 if(shots===0){
   setTimeout(()=>{
     alert("Game Over! Goals: "+goals);
     location.reload();
   },500);
 }
}
let soundEnabled = true;

function showSettings(){

 document.getElementById("home").style.display="none";
 document.getElementById("settings").style.display="block";

}

function closeSettings(){

 document.getElementById("settings").style.display="none";
 document.getElementById("home").style.display="block";

}

function toggleSound(){

 soundEnabled = !soundEnabled;

 if(soundEnabled){
   alert("🔊 Sound ON");
 }else{
   alert("🔇 Sound OFF");
 }

}
function closePlayers(){

 document.getElementById("players").style.display="none";

 document.getElementById("home").style.display="block";

}
function goHome(){

 document.getElementById("game").style.display="none";

 document.getElementById("players").style.display="none";

 document.getElementById("settings").style.display="none";

 document.getElementById("home").style.display="block";

}
const ball = document.getElementById("ball");

let startX = 0;
let startY = 0;

ball.addEventListener("touchstart", function(e){
  e.preventDefault();
  startX = e.touches[0].clientX;
  startY = e.touches[0].clientY;
}, { passive: false });

ball.addEventListener("touchend", function(e){
  e.preventDefault();

  let endX = e.changedTouches[0].clientX;
  let endY = e.changedTouches[0].clientY;

  let dx = endX - startX;
  let dy = startY - endY;

  if (dy > 30) {
    if (dx < -30) {
      shoot("left");
    } else if (dx > 30) {
      shoot("right");
    } else {
      shoot("center");
    }
  }
}, { passive: false });