const Ordenes = require("../models/Ordenes");

const Orden = {
  list: async (req, res) => {
    const ordenes = await Ordenes.find();
    res.status(200).send(ordenes);
  },
  get: async (req, res) => {
    const { id } = req.params;
    const orden = await Ordenes.findOne({ _id: id });
    res.status(200).send(orden);
  },
  create: async (req, res) => {
    const orden = new Ordenes(req.body);
    const saveOrden = await orden.save();
    res.status(201).send(saveOrden._id);
  },
  update: async (req, res) => {
    const { id } = req.params;
    const orden = await Ordenes.findOne({ _id: id });
    Object.assign(orden, req.body);
    await orden.save();
    res.sendStatus(204);
  },
  destroy: async (req, res) => {
    const { id } = req.params;
    const orden = await Ordenes.findOne({ _id: id });
    if (orden) {
        orden.remove();
    }
    res.sendStatus(204);
  },
};

module.exports = Orden;
