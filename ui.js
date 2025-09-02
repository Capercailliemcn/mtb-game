const speedEl=document.getElementById('speed');
const scoreEl=document.getElementById('score');
const comboEl=document.getElementById('combo');
const coinsEl=document.getElementById('coins');
function updateHUD(){
speedEl.textContent=`Speed: ${Math.round(player.velX*50)} km/h`;
scoreEl.textContent=`Score: ${player.score}`;
comboEl.textContent=`Combo: x${player.combo}`;
coinsEl.textContent=`Coins: ${coins}`;
}
setInterval(updateHUD,50);
