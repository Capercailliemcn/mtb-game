const shopGrid=document.createElement('div');
shopGrid.id='shopGrid';
const SHOP=[
{id:'acc1',name:'Lightweight Frame',coins:50,apply:()=>player.upgrades.acc+=0.08},
{id:'susp1',name:'Soft Suspension',coins:60,apply:()=>player.upgrades.suspension+=0.15}
];
function renderShop(){shopGrid.innerHTML='';SHOP.forEach(item=>{
const div=document.createElement('div');div.className='shopItem';
div.innerHTML=`<div style="font-weight:800">${item.name}</div><div>Cost: ${item.coins}</div><div style="margin-top:6px"><button class='btn buy' data-id='${item.id}'>Buy</button></div>`;
shopGrid.appendChild(div);
});}
renderShop();
shopGrid.addEventListener('click',e=>{
if(e.target.classList.contains('buy')){
const id=e.target.dataset.id;
const item=SHOP.find(s=>s.id===id);
if(!item) return;
if(coins<item.coins){addChatMessage('System','Not enough coins');return;}
coins-=item.coins;item.apply();addChatMessage('System',`Bought ${item.name}`);
}
});
