// multiplayer.js
const socket = io('https://your-render-server.onrender.com'); // replace with your Render URL
let otherPlayers = {};

socket.on('connect', () => console.log('Connected to multiplayer server'));

socket.on('newPlayer', ({ id, player }) => {
  otherPlayers[id] = player;
});

socket.on('playerMove', ({ id, player }) => {
  otherPlayers[id] = player;
});

socket.on('playerDisconnected', (id) => {
  delete otherPlayers[id];
});

// Chat
function sendChatMessage(msg) {
  socket.emit('chatMessage', msg);
}

socket.on('chatMessage', ({ id, msg }) => {
  addChatMessage(id, msg);
});

// Send player updates (call this in your game loop)
function sendPlayerUpdate() {
  const data = {
    x: player.x,
    y: player.y,
    score: player.score,
    combo: player.combo
  };
  socket.emit('playerMove', data);
}
