var express = require('express');
const posteosController = require('../controllers/posteosController');
var router = express.Router();

/* GET home page. */
router.get('/', posteosController.index);

module.exports = router;
