var express = require('express');
const  usuariosController= require('../controllers/usuariosController');
var router = express.Router();

/* GET home page. */
router.get('/:id', usuariosController.detalleUsuario);

module.exports = router;
