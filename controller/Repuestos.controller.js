const Repuestos = require("../models/Repuestos");

const Repuesto = {
  list: async (req, res) => {
    const repuestos = await Repuestos.find();
    res.status(200).send(repuestos);
  },
  get: async (req, res) => {
    const { id } = req.params;
    const repuesto = await Repuestos.findOne({ _id: id });
    res.status(200).send(repuesto);
  },
  create: async (req, res) => {
    const repuesto = new Repuestos(req.body);
    const saveRepuestos = await repuesto.save();
    res.status(201).send(saveRepuestos._id);
  },
  update: async (req, res) => {
    const { id } = req.params;
    const repuesto = await Repuestos.findOne({ _id: id });
    Object.assign(repuesto, req.body);
    await repuesto.save();
    res.sendStatus(204);
  },
  destroy: async (req, res) => {
    const { id } = req.params;
    const repuesto = await Repuestos.findOne({ _id: id });
    if (repuesto) {
        repuesto.remove();
    }
    res.sendStatus(204);
  },
};

module.exports = Repuesto;
