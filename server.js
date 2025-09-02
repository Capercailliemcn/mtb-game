// server.js
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');

const app = express();
app.use(cors());
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: '*' } });

app.get('/', (req, res) => res.send('Highland MTB Multiplayer Server is running!'));

let players = {};

io.on('connection', (socket) => {
  console.log('Player connected:', socket.id);
  players[socket.id] = { x: 0, y: 0, score: 0 };

  // Broadcast new player to all others
  socket.broadcast.emit('newPlayer', { id: socket.id, player: players[socket.id] });

  // Receive player movement
  socket.on('playerMove', (data) => {
    if (players[socket.id]) {
      players[socket.id] = data;
      socket.broadcast.emit('playerMove', { id: socket.id, player: data });
    }
  });

  // Chat
  socket.on('chatMessage', (msg) => {
    io.emit('chatMessage', { id: socket.id, msg });
  });

  socket.on('disconnect', () => {
    console.log('Player disconnected:', socket.id);
    delete players[socket.id];
    io.emit('playerDisconnected', socket.id);
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
