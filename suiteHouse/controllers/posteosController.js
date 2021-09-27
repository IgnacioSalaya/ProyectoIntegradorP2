const posteos = require('../data/posteos');
const usuarios = require('../data/usuarios');
const comentarios = require('../data/comentarios');

const posteosController = {
    vistaIndex : (req,res) => {
        res.render('index',{
            style: 'index',
            posteos: posteos.lista, // Un array con objetos literales que contienen la información de cada posteo
            usuarios: usuarios.lista, // Un array con objetos literales que contienen la información de cada usuario
            comentarios: comentarios.lista, // Un array con objetos literales que contienen la información de cada comentario
        })
    },
    vistaDetallePost : (req,res) =>{
        let id = req.params.id
        let posteo = posteos.funPorId(id); // Entrega un objeto literal con la información del posteo, busca = ID de la ruta

        res.render('detallePost',{
            style: 'detallePost',
            posteo: posteo, // Objeto con información del posteo
            usuario: usuarios.lista, // Objeto con información del usuario autor
            comentarios: comentarios.lista, // Array con objetos que contienen la información de los comentarios
        })
    }
}
//res.render('nombreArchivoVista', {objetoLiteral: propiedadUno, propiedadDos,}) para renderizarla
module.exports = posteosController;