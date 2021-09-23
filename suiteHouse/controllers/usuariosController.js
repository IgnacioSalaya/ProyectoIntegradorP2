const usuarios = require('../data/usuarios');
const posteos = require('../data/posteos');
const comentarios = require('../data/comentarios'); // En las vistas (detalleUsuario - miPerfil) no lo pide, pero se puede agregar que aparezcan los comentarios del usuario

const usuariosController = {
    vistaDetalleUsuario : (req,res) =>{
        // Vista usa --> Usuario específico, foto de perfil, posteos, seguidores y seguidos (poner con string),
        res.render('detalleUsuario',{
            usuarios: usuarios.funPorID, // Para usar funPorID dar ID del usuario --> Entrega toda la información de un usuario específico 
            posteos: posteos.funPorUsuarioId, // Para usar funPorUsuarioId dar ID del usuario --> Busca uno o más posteos por ID del usuario (en usuarios da su ID)
            comentarios: comentarios.funPorUsuarioId, // Para usar funPorUsuarioId dar ID del usuario --> Busca uno o más comentarios por ID del usuario (en usuarios da su ID)
            seguidores: 578,
            seguidos: 356
        })
    },
    vistaMiPerfil : (req,res) =>{
        // Vista usa --> usuario específico, 
        res.render('miPerfil',{
            usuarios: usuarios.funPorID, // Para usar funPorID dar ID del usuario --> Entrega toda la información de un usuario específico 
            posteos: posteos.funPorUsuarioId, // Para usar funPorUsuarioId dar ID del usuario --> Busca uno o más posteos por ID del usuario (en usuarios da su ID)
            comentarios: comentarios.funPorUsuarioId, // Para usar funPorUsuarioId dar ID del usuario --> Busca uno o más comentarios por ID del usuario (en usuarios da su ID)
            seguidores: 951,
            seguidos: 322
        })
    }
}

module.exports = usuariosController;