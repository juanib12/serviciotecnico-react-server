const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Repuestos = new Schema({
  id_repuesto: {
    type: Number,
    required: true,
    default: 0,
  },
  descripcion: {
    type: String,
    default: "",
  },
  rubro: {
    type: String,
    default: "",
    required: true,
  },
  stock: {
    type: Number,
    default: 0,
    required: true,
  },
  precio: {
      type: Number,
      default: 0,
  }
});

module.exports = mongoose.model("Repuestos", Repuestos);
