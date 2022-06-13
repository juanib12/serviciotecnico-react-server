const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Clientes = new Schema({
  user:{
    type: String,
    default: "",
  },
  name: {
    type: String,
    required: true,
    default: "",
  },
  address: {
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
  email: {
    type: String,
    default: "",
    required: true,
  },
  nro_celular: {
      type: Number,
      default: 0,
  }
});

module.exports = mongoose.model("Clientes", Clientes);
