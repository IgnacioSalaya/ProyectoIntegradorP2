var express = require('express');
const posteosController = require('../controllers/posteosController');
var router = express.Router();
const multer = require('multer');
const path = require('path');

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
router.get('/:id', posteosController.detallePost);
router.get('/modificar/:id', posteosController.vistaModificarPosteo);

router.post('/:id', posteosController.nuevoComentario);
router.post('/eliminar/:id', posteosController.eliminarPosteo);
router.post('/modificar/:id', upload.single('nuevaImagen'), posteosController.modificarPosteo);

module.exports = router;
