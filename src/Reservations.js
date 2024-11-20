// backend/models/Reservation.js
const mongoose = require("mongoose");

// Define the reservation schema
const reservationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  date: { type: String, required: true },
  time: { type: String, required: true },
  seats: { type: Number, required: true },
});

// Create a model based on the schema
const Reservation = mongoose.model("Reservation", reservationSchema);

module.exports = Reservation;
