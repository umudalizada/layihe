const mongoose = require("mongoose");

const reservSchema = new mongoose.Schema({
  seans: { type: Array, required: true },
  date: { type: Date, required: true },
  movieId: { type: String, required: true },
  selectedSeats: { type: [Number], required: true }
});

const Reserv = mongoose.model("Reserv", reservSchema);

module.exports = Reserv;
