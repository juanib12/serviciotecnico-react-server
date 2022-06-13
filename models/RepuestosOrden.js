const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RepuestosOrden = new Schema({
  user:{
    type: String,
    default: "",
  },
  descripcion: {
    type: [],
    default: "",
  },
  nro_orden: {
    type: String,
    default: 0,
  }
});

module.exports = mongoose.model("RepuestosOrden", RepuestosOrden);
