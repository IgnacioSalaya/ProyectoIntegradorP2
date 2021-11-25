var express = require('express');
const  usuariosController= require('../controllers/usuariosController');
var router = express.Router(); 

const multer = require('multer');
const path = require('path');
const fs = require('fs').promises;

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/images/foto_perfil_usuarios')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({
    storage: storage
})

/* GET home page. */
router.get('/', usuariosController.mostrarPerfil);

router.post('/edit', upload.single('imagenPerfil'), usuariosController.editarPerfil);

module.exports = router;
