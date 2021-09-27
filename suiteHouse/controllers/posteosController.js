const posteos = require('../data/posteos');
const usuarios = require('../data/usuarios');
const comentarios = require('../data/comentarios');

const posteosController = {
    vistaIndex : (req,res) => {
        res.render('index',{
            style: 'index',
            posteos: posteos.lista, // Array con objetos que contienen la información de cada posteo
            usuarios: usuarios.lista, // Array con objetos que contienen la información de cada comentario
            comentarios: comentarios.lista, // Array con objetos que contienen la información de cada usuario
        })
    },
    vistaDetallePost : (req,res) =>{
        let id = req.params.id
        let posteo = posteos.funPorId(id); // Entrega un objeto literal con la información del posteo, busca = ID de la ruta

        res.render('detallePost',{
            style: 'detallePost',
            posteo: posteo, // Objeto con información del posteo específico
            usuario: usuarios.lista, // Array con objetos que contienen la información de cada usuario
            comentarios: comentarios.lista, // Array con objetos que contienen la información de cada comentario
        })
    }
}
//res.render('nombreArchivoVista', {objetoLiteral: propiedadUno, propiedadDos,}) para renderizarla
module.exports = posteosController;