var express = require('express');
var router = express.Router();
// var usersController = require('../controller/usersControlador)

let usuarios = require("../data/usuarios")

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Todos los usuarios');
});


/* GET users listing. */
router.get('index', function(req, res, next) {
  res.send(usuarios.lista);
});

/* GET users listing. */
router.get('/nombre/:nombre', function(req, res, next) {
  let nombre = req.params.nombre
  //let usuarios =usuarios.porNombre(nombre);
  if (usuarios.lista.length > 0) {
    res.send(usuarios);
  } else {
    res.send('No se encontraron usuarios con el nombre ' + nombre);
  }
  
});

module.exports = router;
