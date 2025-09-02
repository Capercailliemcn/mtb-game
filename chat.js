const chatLog=document.createElement('div');
chatLog.id='chatLog';
const chatInput=document.createElement('input');
chatInput.id='chatInput';
const sendChatBtn=document.createElement('button');
sendChatBtn.textContent='Send';
sendChatBtn.onclick=()=>{let txt=chatInput.value.trim();if(txt){addChatMessage('You',txt);chatInput.value='';}};
chatInput.addEventListener('keydown',e=>{if(e.key==='Enter')sendChatBtn.click();});
function addChatMessage(sender,text){
const el=document.createElement('div');el.innerHTML=`<strong>${sender}</strong>: ${text}`;chatLog.appendChild(el);chatLog.scrollTop=chatLog.scrollHeight;
}
