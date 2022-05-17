const Equipos = require("../models/Equipos");

const Equipo = {
  list: async (req, res) => {
    const equipos = await Equipos.find();
    res.status(200).send(equipos);
  },
  get: async (req, res) => {
    const { id } = req.params;
    const equipo = await Equipos.findOne({ _id: id });
    res.status(200).send(equipo);
  },
  create: async (req, res) => {
    const equipo = new Equipos(req.body);
    const saveEquipos = await equipo.save();
    res.status(201).send(saveEquipos._id);
  },
  update: async (req, res) => {
    const { id } = req.params;
    const equipo = await Equipos.findOne({ _id: id });
    Object.assign(equipo, req.body);
    await equipo.save();
    res.sendStatus(204);
  },
  destroy: async (req, res) => {
    const { id } = req.params;
    const equipo = await Equipos.findOne({ _id: id });
    if (equipo) {
      equipo.remove();
    }
    res.sendStatus(204);
  },
};

module.exports = Equipo;
