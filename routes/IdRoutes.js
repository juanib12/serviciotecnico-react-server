const express = require("express");
const router = express.Router();
const Id = require("../models/ID");

router.post("/register", async (req,res,next) => {
    const id = new Id(req.body)
    const saveId = await id.save()
    res.status(201).send(saveId._id)
})

router.post("/login/:id", async (req, res, next) => {
  const {id} = req.params;
  const serial = await Id.findOne({serial: id})
  res.status(200).send(serial)
});

module.exports = router;
