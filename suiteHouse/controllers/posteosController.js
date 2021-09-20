const posteos = require('../data/posteos');

const posteosController = {
    usuarioId : function (req,res) {
        let id = req.params.id; // ID del posteo
        let resultado = ``;
        if ((id > 0) && (id <= posteos.length)) { // Verifica la ID
            for (let index = 0; index < posteos.length; index++) { // Recorre array
                if (id == posteos[index].id) { // Busca objeto de = ID
                    resultado = posteos[index].usuarioId; // Entrega dato buscado        
                }
            }
        }
    },
    foto : function (req,res) {
        let id = req.params.id; // ID del posteo
        let resultado = ``;
        if ((id > 0) && (id <= posteos.length)) { // Verifica la ID
            for (let index = 0; index < posteos.length; index++) { // Recorre array
                if (id == posteos[index].id) { // Busca objeto de = ID
                    resultado = posteos[index].foto; // Entrega dato buscado 
                }
            }
        }
    },
    pieDeFoto : function (req,res) {
        let id = req.params.id; // ID del posteo
        let resultado = ``;
        if ((id > 0) && (id <= posteos.length)) { // Verifica la ID
            for (let index = 0; index < posteos.length; index++) { // Recorre array
                if (id == posteos[index].id) { // Busca objeto de = ID
                    resultado = posteos[index].pieDeFoto; // Entrega dato buscado 
                }
            }
        }
    },

}
// Falta usar res.render('nombreArchivoVista', {objetoLiteral: propiedadUno, propiedadDos,}) para renderizarla
module.exports = posteosController;