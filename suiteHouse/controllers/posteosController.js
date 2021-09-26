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
        let posteo = posteos.funPorId(req.params.id); // Entrega un objeto literal con la información del posteo, busca = ID de la ruta
        let usuarioAutor;
        let comentariosPosteo = [];

        for (let index = 0; index < usuarios.length; index++) { // Recorre array de usuarios
            if (posteo.usuarioId == usuarios.lista[index].id) { // Cuando encuentra un usuario con = ID al autor del posteo:
                usuarioAutor = usuarios.lista[index];           // Entrega un objeto con la indormación del usuario
            }
        }
        
        for (let index = 0; index < comentarios.length; index++) { // Recorre array de comentarios
            if (posteo.id == comentarios.lista[index].posteoId) { // Cuando encuentra un comentario con = ID al posteo:
                comentariosPosteo.push(comentarios.lista[index]); // Entrega un objeto con la indormación del usuario
            }
        }

        res.render('detallePost',{
            posteo: posteo, // Objeto con información del posteo
            usuario: usuarioAutor, // Objeto con información del usuario autor
            comentarios: comentariosPosteo, // Array con objetos que contienen la información de los comentarios
        })
    }
}
//res.render('nombreArchivoVista', {objetoLiteral: propiedadUno, propiedadDos,}) para renderizarla
module.exports = posteosController;