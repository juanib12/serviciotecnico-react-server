const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Ordenes = new Schema({
  user:{
    type: String,
    default: "",
  },
  nro_orden: {
    type: String,
    required: true,
    default: 0,
  },
  nro_serie: {
    type: String,
    required: true,
    default: 0,
  },
  fecha_entrada: {
    type: Date,
    required: true,
  },
  tecnico: {
    type: String,
    default: "",
    required: true,
  },
  precio: {
    type: Number,
    required: true,
    default: 0,
  },
  fecha_reparacion: {
    type: Date,
    required: true,
  },
  estado: {
    type: String,
    required: true,
  },
  repuesto: {
    type: [],
    required: false,
  },
});

module.exports = mongoose.model("Ordenes", Ordenes);
