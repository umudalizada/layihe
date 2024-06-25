const Reserv = require("../models/reservModel");

const getAllReserv = async (req, res) => {
  try {
    const reserv = await Reserv.find();
    res.status(200).send(reserv);
  } catch (error) {
    res.status(500).send(error);
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
    res.status(400).send(error);
  }
};

const getReservById = async (req, res) => {
  try {
    const reserv = await Reserv.findById(req.params.id);
    res.status(200).send(reserv);
  } catch (error) {
    res.status(500).send(error);
  }
};

const deleteReservById = async (req, res) => {
  try {
    const reserv = await Reserv.findByIdAndDelete(req.params.id);
    res.status(200).send(reserv);
  } catch (error) {
    res.status(500).send(error);
  }
};

const patchReservById = async (req, res) => {
  try {
    const reserv = await Reserv.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).send(reserv);
  } catch (error) {
    res.status(400).send(error);
  }
};

const putReservById = async (req, res) => {
  try {
    const reserv = await Reserv.findOneAndReplace({ _id: req.params.id }, req.body, { new: true });
    res.status(200).send(reserv);
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports = { postReserv, putReservById, patchReservById, deleteReservById, getAllReserv, getReservById };
