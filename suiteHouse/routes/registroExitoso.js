var express = require('express');
var router = express.Router();
const usuariosController = require('../controllers/usuariosController')

router.get('/:nombreUsuario', usuariosController.registroExitoso)

module.exports = router;
