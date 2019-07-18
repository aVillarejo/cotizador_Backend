const express = require("express");
const router = express.Router();
const Device = require("../models/device");

//Contultar todas las device
router.get("/", async (req, res) => {
  let devices = await Device.find({});
  if (!devices) throw new Error("Ocurrio un error");
  res.json(devices);
});

//Contultar una solo device
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const device = await Device.findById(id);
  if (!device) throw new Error("Ha ocurrido un error");

  return res.json({ device });
});

//Crear device
router.post("/", async (req, res) => {
  const { Modelo, Costo, AC, avatar } = req.body;
  const newDevice = await Device.create({ Modelo, Costo, AC, avatar });
  if (!newDevice) {
    throw new Error("Ha ocurrido un error");
  }
  res.json({ status: "Agregado Exitosamente" });
});
//Crear
// router.post("/", async (req, res) => {
//   const { title, description } = req.body;
//   const task = new Device({ title, description });
//   await task.save();
//   res.json({ status: "Existoso" });
// });

//Actualizar un device
router.put("/:id", async (req, res) => {
  const { Modelo, Costo, AC, avatar } = req.body;
  const deviceBody = { Modelo, Costo, AC, avatar };
  const { id } = req.params;
  const device = await Device.findByIdAndUpdate(id, deviceBody);
  if (!device) throw new Error("Ha ocurrido un error");
  res.json({ status: "Tarea Actualizada" });
});

//Eliminar un device
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const device = await Device.findByIdAndDelete(id);
  if (!device) throw new Error("Ha ocurrido un error");
  res.json({ status: "Tarea Eliminada" });
});

module.exports = router;
