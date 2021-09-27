const usuarios = require('../data/usuarios');
const posteos = require('../data/posteos');
const comentarios = require('../data/comentarios'); // En las vistas (detalleUsuario - miPerfil) no lo pide, pero se puede agregar que aparezcan los comentarios del usuario

const usuariosController = {
    vistaDetalleUsuario : (req,res) =>{
        let id = req.params.id;
        let usuario = usuarios.funPorId(id); // Entrega un objeto literal con la información del posteo, busca = ID de la ruta
       
        res.render('detalleUsuario',{
            style: 'detalleUsuario',
            usuario: usuario, // Objeto con información del usuario
            posteos: posteos.lista, // Array con objetos que contienen la información de los posteos
            comentarios: comentarios.lista, // Array con objetos que contienen la información de los comentarios
        })
    },
    vistaMiPerfil : (req,res) =>{
        let usuario = usuarios.funPorId(req.params.id); // Entrega un objeto literal con la información del posteo, busca = ID de la ruta
        let posteosUsuario = [];
        let comentariosUsuario = [];

        for (let index = 0; index < posteos.length; index++) { // Recorre array de posteos
            if (usuario.id == posteos.lista[index].usuarioId) { // Cuando encuentra un posteo creado por el usuario (según ID del usuario):
                posteosUsuario.push(posteos.lista[index]);      // Entrega un objeto con la indormación del posteo
            }
        }
        
        for (let index = 0; index < comentarios.length; index++) { // Recorre array de comentarios
            if (usuario.id == comentarios.lista[index].usuarioId) { // Cuando encuentra un comentario con = ID al usuario:
                comentariosUsuario.push(comentarios.lista[index]); // Entrega un objeto con la indormación del usuario
            }
        }

        res.render('miPerfil',{
            style: 'miPerfil',
            usuario: usuario, // Objeto con información del usuario
            posteos: posteosUsuario, // Array con objetos que contienen la información de los posteos
            comentarios: comentariosUsuario, // Array con objetos que contienen la información de los comentarios
        })
    }
}

module.exports = usuariosController;