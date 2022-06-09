const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Id = new Schema({
  serial: {
    type: String,
    required: true,
    default: "",
  },
});


module.exports = mongoose.model("Id", Id);
