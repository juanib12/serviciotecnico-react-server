const Clientes = require("../models/Clientes");

const Cliente = {
  list: async (req, res) => {
    const clientes = await Clientes.find();
    res.status(200).send(clientes);
  },
  get: async (req, res) => {
    const { id } = req.params;
    const cliente = await Clientes.findOne({ _id: id });
    res.status(200).send(cliente);
  },
  create: async (req, res) => {
    const cliente = new Clientes(req.body);
    const saveCliente = await cliente.save();
    res.status(201).send(saveCliente._id);
  },
  update: async (req, res) => {
    const { id } = req.params;
    const cliente = await Clientes.findOne({ _id: id });
    Object.assign(cliente, req.body);
    await cliente.save();
    res.sendStatus(204);
  },
  destroy: async (req, res) => {
    const { id } = req.params;
    const cliente = await Clientes.findOne({ _id: id });
    if (cliente) {
      cliente.remove();
    }
    res.sendStatus(204);
  },
};

module.exports = Cliente;
