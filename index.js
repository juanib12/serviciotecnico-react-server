const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Cliente = require("./controller/Clientes.controller");
const Orden = require("./controller/Ordenes.controller");
const Repuesto = require("./controller/Repuestos.controller");
const Equipo = require("./controller/Equipos.controller");
const BuscarOrden = require("./controller/BuscarOrden.controller");
const BuscarCliente = require("./controller/BuscarCliente.controller");
const ClientesUser = require("./controller/ClienteUser")
const RepuestosOrden = require("./controller/RepuestosOrden.controller");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const session = require("express-session");
const passport = require("passport");
const Clientes = require("./models/Clientes");
require("dotenv").config();

mongoose
  .connect(
    process.env.MONGODB_URI || "mongodb+srv://juanibianco:reginabianco123@juani.rtfiz.mongodb.net/serviciotecnico?retryWrites=true&w=majority", //  <--- UPDATE
    { useNewUrlParser: true }
  )
  .then((x) => console.log("Connected to the DB"))
  .catch((err) => console.error("Error while connecting to DB", err));

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session({ secret: "SECRET", resave: true, saveUninitialized: true }));
app.use(bodyParser.json());
app.use(cookieParser(process.env.COOKIE_SECRET));

const corsOptions = {
  origin: ["https://techfix-demo.vercel.app", "https://techfix-app.vercel.app", "https://techfix-orden.vercel.app", "http://localhost:3000"],
  credentials: true,
};

app.use(cors(corsOptions));
app.use(passport.initialize());
app.use(passport.session());

//CLIENTES
app.get("/clientes", async (req, res) => {
  const clientes = await Clientes.find();
  res.status(200).send(clientes);
});
app.get("/clientes/:dni", Cliente.get);
app.post("/clientes", Cliente.create);
app.put("/clientes/:id", Cliente.update);
app.patch("/clientes/:id", Cliente.update);
app.delete("/clientes/:id", Cliente.destroy);

//ORDENES
app.get("/ordenes", Orden.list);
app.get("/ordenes/:id", Orden.get);
app.post("/ordenes", Orden.create);
app.put("/ordenes/:id", Orden.update);
app.patch("/ordenes/:id", Orden.update);
app.delete("/ordenes/:id", Orden.destroy);

//REPUESTOS
app.get("/repuestos", Repuesto.list);
app.get("/repuestos/:id", Repuesto.get);
app.post("/repuestos", Repuesto.create);
app.put("/repuestos/:id", Repuesto.update);
app.patch("/repuestos/:id", Repuesto.update);
app.delete("/repuestos/:id", Repuesto.destroy);

//EQUIPOS
app.get("/equipos", Equipo.list);
app.get("/equipos/:nro_serie", Equipo.get);
app.post("/equipos", Equipo.create);
app.put("/equipos/:id", Equipo.update);
app.patch("/equipos/:id", Equipo.update);
app.delete("/equipos/:id", Equipo.destroy);

//BUSCAr
app.get("/buscarorden/:nro_orden", BuscarOrden.get);
app.get("/buscarcliente/:dni", BuscarCliente.get);

//REPUESTOS ORDN
app.get("/repuestosorden", RepuestosOrden.list);
app.get("/repuestosorden/:nro_orden", RepuestosOrden.get);
app.post("/repuestosorden", RepuestosOrden.create);

app.get("/", (req, res, next) => {
  res.send("Hola");
});

app.listen(process.env.PORT || 3001, () => {
  console.log("Funcionando en el puerto 3001");
});
