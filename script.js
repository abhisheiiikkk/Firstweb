let goals=0;
let shots=5;

function showPlayers(){
 document.getElementById("home").style.display="none";
 document.getElementById("players").style.display="block";
}

function startGame(player){
 document.getElementById("players").style.display="none";
 document.getElementById("game").style.display="block";

 document.getElementById("playerName").innerText=player;
}

function shoot(side){

 if(shots<=0) return;

 let dirs=["left","center","right"];
 let keeper=dirs[Math.floor(Math.random()*3)];

 document.getElementById("keeper").style.left=
 keeper==="left"?"40px":
 keeper==="center"?"140px":"240px";

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