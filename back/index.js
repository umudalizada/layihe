
// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// require("dotenv/config");
// const routes = require("./src/routes/ticketRouters");
// const http = require('http');
// const { Server } = require('socket.io');

// const app = express();
// const PORT = process.env.PORT || 3001;

// app.use(bodyParser.json());
// app.use(cors());
// require("./src/config/db");
// app.use("/api", routes);
// const server = http.createServer(app);

// const io = new Server(server, {
//   cors: {
//     origin: '*',
//   },
// });

// const users = {};

// io.on('connection', (socket) => {
//   console.log('A user connected: ' + socket.id);

//   socket.on('addUser', (username) => {
//     users[socket.id] = username;
//     console.log(`${username} connected`);
//   });

//   socket.on('sendMessage', (data) => {
//     const { message, username } = data;
//     io.emit('receiveMessage', { userId: socket.id, message, username }); 

//   });

//   socket.on('disconnect', () => {
//     console.log(`A user disconnected: ${users[socket.id]}`);
//     delete users[socket.id];
//   });
// });

// server.listen(PORT, () => {
//   console.log(`Server has started on port ${PORT}`);
// });










const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require("dotenv/config");
const routes = require("./src/routes/ticketRouters");
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(cors());
require("./src/config/db");
app.use("/api", routes);
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: '*',
  },
});

const users = {};

io.on('connection', (socket) => {
  console.log('A user connected: ' + socket.id);

  socket.on('addUser', (username) => {
    users[socket.id] = username;
    console.log(`${username} connected`);
  });

  socket.on('sendMessage', (data) => {
    const { message, username } = data;
    io.emit('receiveMessage', { userId: socket.id, message, username });
  });

  socket.on('disconnect', () => {
    console.log(`A user disconnected: ${users[socket.id]}`);
    delete users[socket.id];
  });
});

server.listen(PORT, () => {
  console.log(`Server has started on port ${PORT}`);
});
