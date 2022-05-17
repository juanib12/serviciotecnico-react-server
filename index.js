const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Cliente = require("./controller/Clientes.controller")
const Orden = require("./controller/Ordenes.controller")
const Repuesto = require("./controller/Repuestos.controller")
const Equipo = require("./controller/Equipos.controller")

mongoose.connect(
  "mongodb+srv://juanibianco:reginabianco123@juani.rtfiz.mongodb.net/serviciotecnico?retryWrites=true&w=majority",
  { useNewUrlParser: true },
  (err) => {
    if (err) return err;
    console.log("conectado a mongodb");
  }
);

const app = express();
app.use(express.json());

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
};

app.use(cors(corsOptions));

app.get("/clientes", Cliente.list);
app.get("/clientes/:id", Cliente.get);
app.post("/clientes", Cliente.create);
app.put("/clientes/:id", Cliente.update);
app.patch("/clientes/:id", Cliente.update);
app.delete("/clientes/:id", Cliente.destroy);

app.get("/ordenes", Orden.list);
app.get("/ordenes/:id", Orden.get);
app.post("/ordenes", Orden.create);
app.put("/ordenes/:id", Orden.update);
app.patch("/ordenes/:id", Orden.update);
app.delete("/ordenes/:id", Orden.destroy);

app.get("/repuestos", Repuesto.list);
app.get("/repuestos/:id", Repuesto.get);
app.post("/repuestos", Repuesto.create);
app.put("/repuestos/:id", Repuesto.update);
app.patch("/repuestos/:id", Repuesto.update);
app.delete("/repuestos/:id", Repuesto.destroy);

app.get("/equipos", Equipo.list);
app.get("/equipos/:id", Equipo.get);
app.post("/equipos", Equipo.create);
app.put("/equipos/:id", Equipo.update);
app.patch("/equipos/:id", Equipo.update);
app.delete("/equipos/:id", Equipo.destroy);

app.listen(3001, () => {
  console.log("Funcionando en el puerto 3001");
});
