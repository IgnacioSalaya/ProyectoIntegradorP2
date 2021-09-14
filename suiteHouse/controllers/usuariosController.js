const usuarios = require('../data/usuarios');

const usuariosController = {
    nickname : function (req,res) {
        let id = req.params.id; // Usar mismo valor en rutas
        let resultado = ``;
        if ((id > 0) && (id <= usuarios.length)) {
            for (let index = 0; index < usuarios.length; index++) {
                if (id == usuarios[index].id) {
                    resultado = usuarios[index].nickname;         
                }
            }
        }
    },
    nombre : function (req,res) {
        let id = req.params.id; // Usar mismo valor en rutas
        let resultado = ``;
        if ((id > 0) && (id <= usuarios.length)) {
            for (let index = 0; index < usuarios.length; index++) {
                if (id == usuarios[index].id) {
                    resultado = usuarios[index].nombre;         
                }
            }
        }
    },
    apellido : function (req,res) {
        let id = req.params.id; // Usar mismo valor en rutas
        let resultado = ``;
        if ((id > 0) && (id <= usuarios.length)) {
            for (let index = 0; index < usuarios.length; index++) {
                if (id == usuarios[index].id) {
                    resultado = usuarios[index].apellido;         
                }
            }
        }
    },
    fotoDePerfil : function (req,res) {
        let id = req.params.id; // Usar mismo valor en rutas
        let resultado = ``;
        if ((id > 0) && (id <= usuarios.length)) {
            for (let index = 0; index < usuarios.length; index++) {
                if (id == usuarios[index].id) {
                    resultado = usuarios[index].fotoDePerfil;         
                }
            }
        }
    }
}

module.exports = usuariosController;