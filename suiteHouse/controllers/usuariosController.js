const usuarios = require('../data/usuarios');
const posteos = require('../data/posteos');
const comentarios = require('../data/comentarios');

const usuariosController = {
    vistaDetalleUsuario : (req,res) =>{
        let id = req.params.id;
        let usuario = usuarios.funPorId(id); // Entrega un objeto literal con la información del usuario, busca = ID de la ruta
       
        res.render('detalleUsuario',{
            style: 'detalleUsuario',
            usuario: usuario, // Objeto con información del usuario específico
            posteos: posteos.lista, // Array con objetos que contienen la información de cada posteo
            comentarios: comentarios.lista, // Array con objetos que contienen la información de cada comentario
        })
    },
    vistaMiPerfil : (req,res) =>{
        let id = req.params.id;
        let usuario = usuarios.funPorId(id); // Entrega un objeto literal con la información del usuario, busca = ID de la ruta

        res.render('miPerfil',{
            style: 'miPerfil',
            usuario: usuario, // Objeto con información del usuario específico
            posteos: posteos.lista, // Array con objetos que contienen la información de cada posteo
            comentarios: comentarios.lista, // Array con objetos que contienen la información de cada comentario
        })
    },
    vistaEditarPerfil : (req,res) =>{
        res.render('editarPerfil',{
            style: 'editarPerfil',
            usuario: usuario.lista[3], // Objeto con información del usuario específico
        })
    }
}

module.exports = usuariosController;