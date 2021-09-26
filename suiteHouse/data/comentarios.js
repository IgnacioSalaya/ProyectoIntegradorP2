const posteos = require('./posteos');
const usuarios = require('./usuarios');

const comentarios = {
    lista: [
        {
            id: 1,
            usuarioId: 2,
            posteoId: 1,
            comentario: 'Este es un comentario que comenta algo',
            fechaPublicacion: '12:59 17/09/21'
        },
        {
            id: 2,
            usuarioId: 3,
            posteoId: 1,
            comentario: 'Este es un comentario que comenta algo',
            fechaPublicacion: '12:59 17/09/21'
        },
        {
            id: 3,
            usuarioId: 4,
            posteoId: 1,
            comentario: 'Este es un comentario que comenta algo',
            fechaPublicacion: '12:59 17/09/21'
        },
        {
            id: 4,
            usuarioId: 5,
            posteoId: 1,
            comentario: 'Este es un comentario que comenta algo',
            fechaPublicacion: '12:59 17/09/21'
        },
        {
            id: 5,
            usuarioId: 1,
            posteoId: 2,
            comentario: 'Este es un comentario que comenta algo',
            fechaPublicacion: '12:59 17/09/21'
        },
        {
            id: 6,
            usuarioId: 3,
            posteoId: 2,
            comentario: 'Este es un comentario que comenta algo',
            fechaPublicacion: '12:59 17/09/21'
        },
        {
            id: 7,
            usuarioId: 4,
            posteoId: 2,
            comentario: 'Este es un comentario que comenta algo',
            fechaPublicacion: '12:59 17/09/21'
        },
        {
            id: 8,
            usuarioId: 5,
            posteoId: 2,
            comentario: 'Este es un comentario que comenta algo',
            fechaPublicacion: '12:59 17/09/21'
        },
        {
            id: 9,
            usuarioId: 1,
            posteoId: 3,
            comentario: 'Este es un comentario que comenta algo',
            fechaPublicacion: '12:59 17/09/21'
        },
        {
            id: 10,
            usuarioId: 2,
            posteoId: 3,
            comentario: 'Este es un comentario que comenta algo',
            fechaPublicacion: '12:59 17/09/21'
        },
        {
            id: 11,
            usuarioId: 4,
            posteoId: 3,
            comentario: 'Este es un comentario que comenta algo',
            fechaPublicacion: '12:59 17/09/21'
        },
        {
            id: 12,
            usuarioId: 5,
            posteoId: 3,
            comentario: 'Este es un comentario que comenta algo',
            fechaPublicacion: '12:59 17/09/21'
        },
        {
            id: 13,
            usuarioId: 1,
            posteoId: 4,
            comentario: 'Este es un comentario que comenta algo',
            fechaPublicacion: '12:59 17/09/21'
        },
        {
            id: 14,
            usuarioId: 2,
            posteoId: 4,
            comentario: 'Este es un comentario que comenta algo',
            fechaPublicacion: '12:59 17/09/21'
        },
        {
            id: 15,
            usuarioId: 3,
            posteoId: 4,
            comentario: 'Este es un comentario que comenta algo',
            fechaPublicacion: '12:59 17/09/21'
        },
        {
            id: 16,
            usuarioId: 5,
            posteoId: 4,
            comentario: 'Este es un comentario que comenta algo',
            fechaPublicacion: '12:59 17/09/21'
        },
        {
            id: 17,
            usuarioId: 1,
            posteoId: 5,
            comentario: 'Este es un comentario que comenta algo',
            fechaPublicacion: '12:59 17/09/21'
        },
        {
            id: 18,
            usuarioId: 2,
            posteoId: 5,
            comentario: 'Este es un comentario que comenta algo',
            fechaPublicacion: '12:59 17/09/21'
        },
        {
            id: 19,
            usuarioId: 3,
            posteoId: 5,
            comentario: 'Este es un comentario que comenta algo',
            fechaPublicacion: '12:59 17/09/21'
        },
        {
            id: 20,
            usuarioId: 4,
            posteoId: 5,
            comentario: 'Este es un comentario que comenta algo',
            fechaPublicacion: '12:59 17/09/21'
        },
        {
            id: 21,
            usuarioId: 2,
            posteoId: 6,
            comentario: 'Este es un comentario que comenta algo',
            fechaPublicacion: '12:59 17/09/21'
        },
        {
            id: 22,
            usuarioId: 3,
            posteoId: 6,
            comentario: 'Este es un comentario que comenta algo',
            fechaPublicacion: '12:59 17/09/21'
        },
        {
            id: 23,
            usuarioId: 4,
            posteoId: 6,
            comentario: 'Este es un comentario que comenta algo',
            fechaPublicacion: '12:59 17/09/21'
        },
        {
            id: 24,
            usuarioId: 5,
            posteoId: 6,
            comentario: 'Este es un comentario que comenta algo',
            fechaPublicacion: '12:59 17/09/21'
        },
        {
            id: 25,
            usuarioId: 1,
            posteoId: 7,
            comentario: 'Este es un comentario que comenta algo',
            fechaPublicacion: '12:59 17/09/21'
        },
        {
            id: 26,
            usuarioId: 3,
            posteoId: 7,
            comentario: 'Este es un comentario que comenta algo',
            fechaPublicacion: '12:59 17/09/21'
        },
        {
            id: 27,
            usuarioId: 4,
            posteoId: 7,
            comentario: 'Este es un comentario que comenta algo',
            fechaPublicacion: '12:59 17/09/21'
        },
        {
            id: 28,
            usuarioId: 5,
            posteoId: 7,
            comentario: 'Este es un comentario que comenta algo',
            fechaPublicacion: '12:59 17/09/21'
        },
        {
            id: 29,
            usuarioId: 1,
            posteoId: 8,
            comentario: 'Este es un comentario que comenta algo',
            fechaPublicacion: '12:59 17/09/21'
        },
        {
            id: 30,
            usuarioId: 2,
            posteoId: 8,
            comentario: 'Este es un comentario que comenta algo',
            fechaPublicacion: '12:59 17/09/21'
        },
        {
            id: 31,
            usuarioId: 4,
            posteoId: 8,
            comentario: 'Este es un comentario que comenta algo',
            fechaPublicacion: '12:59 17/09/21'
        },
        {
            id: 32,
            usuarioId: 5,
            posteoId: 8,
            comentario: 'Este es un comentario que comenta algo',
            fechaPublicacion: '12:59 17/09/21'
        },
        {
            id: 33,
            usuarioId: 1,
            posteoId: 9,
            comentario: 'Este es un comentario que comenta algo',
            fechaPublicacion: '12:59 17/09/21'
        },
        {
            id: 34,
            usuarioId: 2,
            posteoId: 9,
            comentario: 'Este es un comentario que comenta algo',
            fechaPublicacion: '12:59 17/09/21'
        },
        {
            id: 35,
            usuarioId: 3,
            posteoId: 9,
            comentario: 'Este es un comentario que comenta algo',
            fechaPublicacion: '12:59 17/09/21'
        },
        {
            id: 36,
            usuarioId: 5,
            posteoId: 9,
            comentario: 'Este es un comentario que comenta algo',
            fechaPublicacion: '12:59 17/09/21'
        },
        {
            id: 37,
            usuarioId: 1,
            posteoId: 10,
            comentario: 'Este es un comentario que comenta algo',
            fechaPublicacion: '12:59 17/09/21'
        },
        {
            id: 38,
            usuarioId: 2,
            posteoId: 10,
            comentario: 'Este es un comentario que comenta algo',
            fechaPublicacion: '12:59 17/09/21'
        },
        {
            id: 39,
            usuarioId: 3,
            posteoId: 10,
            comentario: 'Este es un comentario que comenta algo',
            fechaPublicacion: '12:59 17/09/21'
        },
        {
            id: 40,
            usuarioId: 4,
            posteoId: 10,
            comentario: 'Este es un comentario que comenta algo',
            fechaPublicacion: '12:59 17/09/21'
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