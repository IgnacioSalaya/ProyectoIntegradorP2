const posteos = require('../data/posteos');
const usuarios = require('../data/usuarios');
const comentarios = require('../data/comentarios');

const posteosController = {
    vistaIndex : (req,res) => {
        res.render('index',{
            posteos: posteos,
            usuarios: usuarios.funPorID, // Para usar funPorID --> Busca un usuario por su ID (en posteo da el ID del usuario)
            comentarios: comentarios.funPorPosteoId, // Para usar funPorPosteoId --> Busca uno o más comentarios por ID del posteo (en posteo da su ID)
        })
    },
    vistaDetallePost : (req,res) =>{
        // Vista usa --> imagen del posteo - pie de imagen - usuario y su imagen - comentarios
        res.render('index',{
            posteos: posteos,
            usuarios: usuarios.funPorID, // Para usar funPorID --> Busca un usuario por su ID (en posteo da el ID del usuario)
            comentarios: comentarios.funPorPosteoId, // Para usar funPorPosteoId --> Busca uno o más comentarios por ID del posteo (en posteo da su ID)
        })
    }
}
//res.render('nombreArchivoVista', {objetoLiteral: propiedadUno, propiedadDos,}) para renderizarla
module.exports = posteosController;