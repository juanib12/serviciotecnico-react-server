const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Equipos = new Schema({
  nro_serie: {
    type: String,
    required: true,
    default: 0,
  },
  tipo_equipo: {
    type: String,
    required: true,
    default: "",
  },
  dni: {
    type: Number,
    default: 0,
    maxlength: 8,
    required: true,
  },
  marca: {
    type: String,
    default: "",
    required: true,
  },
  modelo: {
      type: String,
      default: "",
      required: true,
  }
});

module.exports = mongoose.model("Equipos", Equipos);
