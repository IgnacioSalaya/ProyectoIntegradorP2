var express = require('express');
var router = express.Router();
const posteosController = require('../controllers/posteosController');

router.get('/', posteosController.buscador);

module.exports = router;
