const Clientes = require("../models/Clientes");

const ClientesUser = {
  byUser: async (req, res) => {
    const { user } = req.params;
    const cliente = await Clientes.find({ user: user });
    res.status(200).send(cliente);
  },
};

module.exports = ClientesUser;
