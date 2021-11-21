var express = require('express');
var router = express.Router();
const usuariosController = require('../controllers/usuariosController');

router.post('/', usuariosController.logout);

module.exports = router;
