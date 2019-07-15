const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const DEVICE_SCHEMA = new Schema({
  Modelo: String,
  Costo: Number,
  AC: Number,
  avatar: String
});

module.exports = model("devices", DEVICE_SCHEMA);
