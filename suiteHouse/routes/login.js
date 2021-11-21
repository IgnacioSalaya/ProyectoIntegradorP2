var express = require('express');
var router = express.Router();
const usuariosController = require('../controllers/usuariosController');

router.get('/', usuariosController.login);

router.post('/', usuariosController.loguearse)

module.exports = router;
