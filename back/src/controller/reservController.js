const Reserv = require("../models/reservModel");

const getAllReserv = async (req, res) => {
  try {
    const reservs = await Reserv.find();
    res.status(200).send(reservs);
  } catch (error) {
    res.status(500).send({ message: "Failed to retrieve reservations", error });
  }
};

const postReserv = async (req, res) => {
  try {
    const { movieId, date, seans, selectedSeats } = req.body;
    
    // Aynı film, tarih ve seans için mevcut rezervasyonları kontrol et
    const existingReserv = await Reserv.findOne({ movieId, date, seans });
    
    if (existingReserv) {
      // Çakışma kontrolü
      const overlap = selectedSeats.some(seat => existingReserv.selectedSeats.includes(seat));
      if (overlap) {
        return res.status(400).send({ message: 'Some seats are already reserved.' });
      }
      // Koltukları ekle
      existingReserv.selectedSeats.push(...selectedSeats);
      await existingReserv.save();
      res.status(201).send(existingReserv);
    } else {
      const newReserv = new Reserv(req.body);
      await newReserv.save();
      res.status(201).send(newReserv);
    }
  } catch (error) {
    res.status(400).send({ message: "Failed to create reservation", error });
  }
};

const getReservById = async (req, res) => {
  try {
    const reserv = await Reserv.findById(req.params.id);
    if (!reserv) {
      return res.status(404).send({ message: "Reservation not found" });
    }
    res.status(200).send(reserv);
  } catch (error) {
    res.status(500).send({ message: "Failed to retrieve reservation", error });
  }
};

const deleteReservById = async (req, res) => {
  try {
    const reserv = await Reserv.findByIdAndDelete(req.params.id);
    if (!reserv) {
      return res.status(404).send({ message: "Reservation not found" });
    }
    res.status(200).send({ message: "Reservation deleted", reserv });
  } catch (error) {
    res.status(500).send({ message: "Failed to delete reservation", error });
  }
};

const patchReservById = async (req, res) => {
  try {
    const reserv = await Reserv.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!reserv) {
      return res.status(404).send({ message: "Reservation not found" });
    }
    res.status(200).send(reserv);
  } catch (error) {
    res.status(400).send({ message: "Failed to update reservation", error });
  }
};

const putReservById = async (req, res) => {
  try {
    const reserv = await Reserv.findOneAndReplace({ _id: req.params.id }, req.body, { new: true });
    if (!reserv) {
      return res.status(404).send({ message: "Reservation not found" });
    }
    res.status(200).send(reserv);
  } catch (error) {
    res.status(400).send({ message: "Failed to replace reservation", error });
  }
};

module.exports = { postReserv, putReservById, patchReservById, deleteReservById, getAllReserv, getReservById };
