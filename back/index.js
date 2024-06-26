const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const http = require('http');
const { Server } = require('socket.io');
const mongoose = require('mongoose');
require("dotenv/config");

const routes = require("./src/routes/ticketRouters");
const authRouter = require('./src/routes/authRouter');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static("public"));
app.use(bodyParser.json());
app.use(cors());
require("./src/config/db");
app.use("/auth", authRouter);
app.use("/api", routes);
app.get('/api/reserv', async (req, res) => {
  try {
    const { movieId, date, seans } = req.query;


    const reservations = await Reservation.find({ movieId, date, seans });
    res.json(reservations);
  } catch (error) {
    console.error("Rezervasyon verileri getirilemedi:", error);
    res.status(500).send("Rezervasyon verileri getirilemedi");
  }
});

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

mongoose.connect(process.env.DB_SECRET_KEY, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to the database!'))
  .catch((err) => console.error('Database connection error:', err));

server.listen(PORT, () => {
  console.log(`Server has started on port ${PORT}`);
});
