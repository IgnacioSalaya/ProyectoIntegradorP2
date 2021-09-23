const posteos = require('./posteos');
const usuarios = require('./usuarios');

const comentarios = {
    lista: [
        {
            id: 1,
            usuarioId: 1,
            posteoId: 2,
            comentario: 'Este es un comentario que comenta algo'
        },
        {
            id: 2,
            usuarioId: 5,
            posteoId: 1,
            comentario: 'Este es un comentario que comenta algo'
        },
        {
            id: 3,
            usuarioId: 5,
            posteoId: 5,
            comentario: 'Este es un comentario que comenta algo'
        },
        {
            id: 4,
            usuarioId: 4,
            posteoId: 3,
            comentario: 'Este es un comentario que comenta algo'
        },
        {
            id: 5,
            usuarioId: 5,
            posteoId: 4,
            comentario: 'Este es un comentario que comenta algo'
        },
        {
            id: 6,
            usuarioId: 3,
            posteoId: 2,
            comentario: 'Este es un comentario que comenta algo'
        }
    ],
    funIndex : function (position) { // Entrega comentario según la posición en el array
        let resultado = '';
        if ((position >= 0) && (position < comentarios.lista.length )) { // Verifica que la posición exista
            for (let index = 0; index < comentarios.lista.length; index++) { // Recorre array de lista
                if (position == index) { // Busca objeto de = ID
                    resultado = comentarios.lista[index]; // Entrega el objeto comlpeto de la posició del array
                }
            }
        }
    },
    funPorPosteoId : function (posteoId) { // Entrega un array con los comentarios según ID del posteo
        let resultado = [];
        if ((posteoId > 0) && (posteoId <= posteos.lista.length )) { // Verifica que la ID del posteo exista
            for (let index = 0; index < comentarios.lista.length; index++) { // Recorre array de lista
                if (posteoId == comentarios.lista[index].posteoId) { // Busca objeto de = ID de posteo
                    resultado.push(comentarios.lista[index]); // Agrega el objeto completo al array
                }
            }
        }
    },
    funPorUsuarioId : function (usuarioId) { // Entrega un array con los comentarios según ID del usuario
        let resultado = [];
        if ((usuarioId > 0) && (usuarioId <= usuarios.lista.length )) { // Verifica que la ID del usuario exista
            for (let index = 0; index < comentarios.lista.length; index++) { // Recorre array de lista
                if (usuarioId == comentarios.lista[index].usuarioId) { // Busca objeto de = ID de usuario
                    resultado.push(comentarios.lista[index]); // Agrega el objeto completo al array
                }
            }
        }
    }
}

module.exports = comentarios;