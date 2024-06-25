const mongoose = require("mongoose");

const reservSchema = mongoose.Schema({
  seans: { type: String, required: true },
  date: { type: Date, required: true },
  movieId: { type: String, required: true },
  selectedSeats: { type: [Number], required: true }
});

module.exports = mongoose.model("Reserv", reservSchema);
