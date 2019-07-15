//import mongoose from "mongoose";
const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const USUARIO_SCHEMA = new Schema({
  usuario: String,
  password: String
  //   tipo: String,
  //   nombre: String,
  //   apellidos: String,
  //   genero: String,
  //   labora: String,
  //   programas: String,
  //   curp: String
});

const Usuario = model("users", USUARIO_SCHEMA);

module.exports.Usuario = Usuario;
