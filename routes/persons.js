const express = require("express");
const router = express.Router();
const mongoose = require("../node_modules/mongoose");
let Person = require("../models/person");

router.get("/persons", function (req, res, next) {
  Person.find(function (err, persons) {
    if (err) return next(err);
    res.json(persons);
  });
});

//ruta para mostrar el formulario
router.get("/person", function (req, res) {
  res.render("person");
});

//agregar nuevo documento a la colección
//ruta para atender la petición del formulario
router.post("/addPerson", function (req, res) {
  const myPerson = new Person({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
  }); //crear la entidad
  myPerson.save(); //guardar en la base de datos
});

module.exports = router;
