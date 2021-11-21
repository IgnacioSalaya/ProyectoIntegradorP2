var express = require('express');
var router = express.Router();
const multer = require('multer');
const path = require('path');
const posteosController = require('../controllers/posteosController');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/images/posteos')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({
    storage: storage
})

/* GET home page. */
router.get('/', posteosController.vistaAgregarPost);

router.post('/', upload.single('imagenPosteo'), posteosController.agregarPost)

module.exports = router;
