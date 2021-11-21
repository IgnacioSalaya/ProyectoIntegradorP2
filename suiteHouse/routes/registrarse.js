var express = require('express');
const usuariosController = require('../controllers/usuariosController');
var router = express.Router();
const multer = require('multer');
const path = require('path');

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

router.get('/', usuariosController.registrarse);

router.post('/', upload.single('imagenPerfil'), usuariosController.nuevoUsuario);

module.exports = router;