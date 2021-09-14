const posteos = require('../data/posteos');
const comentarios = require('../data/comentarios');
const usuarios = require('../data/usuarios');

const posteosController = {
    comentariosPorPosteo : function (req,res) {
        let id = req.params.id; // ID del posteo *corregir "req.params.id" por el método de entrada
        let resultado = ``;
        if ((id > 0) && (id <= posteos.length)) { // Verifica la ID del posteo
            for (let index = 0; index < comentarios.length; index++) { // Recorre array de comentarios
                if (id == comentarios[index].posteoId) { // Busca comentarios del posteo por ID
                    resultado = comentarios[index].comentario; // Entrega dato buscado        
                }
            }
        }
    },
    comentariosPorUsuario : function (req,res) {
        let id = req.params.id; // ID del usuario *corregir "req.params.id" por el método de entrada
        let resultado = ``;
        if ((id > 0) && (id <= usuarios.length)) { // Verifica la ID del usuario
            for (let index = 0; index < comentarios.length; index++) { // Recorre array de comentarios
                if (id == comentarios[index].usuarioId) { // Busca comentarios del posteo por ID
                    resultado = comentarios[index].comentario; // Entrega dato buscado        
                }
            }
        }
    }
}

module.exports = posteosController;