const Ordenes = require("../models/Ordenes");

const Buscar = {
  get: async (req, res) => {
    const { nro_orden } = req.params;
    const orden = await Ordenes.findOne({ nro_orden: nro_orden });
    res.status(200).send(orden);
  },
};

module.exports = Buscar;
