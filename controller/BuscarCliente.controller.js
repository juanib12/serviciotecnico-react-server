const Clientes = require("../models/Clientes");

const Buscar = {
  get: async (req, res) => {
    const { dni } = req.params;
    const cliente = await Clientes.findOne({ dni: dni });
    res.status(200).send(cliente);
  },
  byUser: async (req,res) => {
    const {user} = req.params
    const cliente = await Clientes.find({user: user})
    res.status(200).send(cliente)
  }
};

module.exports = Buscar;
