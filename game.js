const canvas=document.getElementById('gameCanvas');
const ctx=canvas.getContext('2d');
let W=canvas.width,H=canvas.height;
let player={x:120,y:H/2,velX:0,velY:0,score:0,combo:1,health:100,bike:'trail',upgrades:{acc:0,top:0,handling:0,suspension:0}};
let coins=0;
let maps=[]; // Placeholder 50 maps
for(let i=0;i<50;i++) maps.push({id:i,name:`Map ${i+1}`});
function loop(){ctx.clearRect(0,0,W,H);ctx.fillStyle='#071a26';ctx.fillRect(0,0,W,H);requestAnimationFrame(loop);}
loop();
