const RepuestosOrden = require("../models/RepuestosOrden")

const RepuestosOrd = {
  list: async (req, res) => {
    const rep = await RepuestosOrden.find();
    res.status(200).send(rep);
  },
  get: async (req, res) => {
    const { nro_orden } = req.params;
    const repuesto = await RepuestosOrden.find({ nro_orden: nro_orden });
    res.status(200).send(repuesto);
  },
  create: async (req, res) => {
    const rep = new RepuestosOrden(req.body);
    const saveRep = await rep.save();
    res.status(201).send(saveRep._id);
  },
};

module.exports = RepuestosOrd;
