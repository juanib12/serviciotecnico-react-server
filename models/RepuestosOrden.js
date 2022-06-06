const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RepuestosOrden = new Schema({
  descripcion: {
    type: String,
    default: "",
  },
  nro_orden: {
    type: String,
    required: true,
    default: 0,
  }
});

module.exports = mongoose.model("RepuestosOrden", RepuestosOrden);
