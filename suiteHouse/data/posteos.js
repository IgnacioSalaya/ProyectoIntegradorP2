const usuarios = require('./usuarios');

const posteos = {
    lista: [
        {
            id: 1,
            usuarioId: 1, // Autor
            imagen: 'suiteHome.png',
            pieDeImagen: 'Este es un pie de imagen muy largo. Me sirve para ver si el texto está truncado',
            fechaPublicacion: '11:20 17/09/21'
        },
        {
            id: 2,
            usuarioId: 2,
            imagen: 'suiteHome.png',
            pieDeImagen: 'Este es un pie de imagen muy largo. Me sirve para ver si el texto está truncado',
            fechaPublicacion: '11:20 17/09/21'
        },
        {
            id: 3,
            usuarioId: 3,
            imagen: 'suiteHome.png',
            pieDeImagen: 'Este es un pie de imagen muy largo. Me sirve para ver si el texto está truncado',
            fechaPublicacion: '11:20 17/09/21'
        },
        {
            id: 4,
            usuarioId: 4,
            imagen: 'suiteHome.png',
            pieDeImagen: 'Este es un pie de imagen muy largo. Me sirve para ver si el texto está truncado',
            fechaPublicacion: '11:20 17/09/21'
        },
        {
            id: 5,
            usuarioId: 5,
            imagen: 'suiteHome.png',
            pieDeImagen: 'Este es un pie de imagen muy largo. Me sirve para ver si el texto está truncado',
            fechaPublicacion: '11:20 17/09/21'
        },
        {
            id: 6,
            usuarioId: 1,
            imagen: 'suiteHome.png',
            pieDeImagen: 'Este es un pie de imagen muy largo. Me sirve para ver si el texto está truncado',
            fechaPublicacion: '11:20 17/09/21'
        },
        {
            id: 7,
            usuarioId: 2,
            imagen: 'suiteHome.png',
            pieDeImagen: 'Este es un pie de imagen muy largo. Me sirve para ver si el texto está truncado',
            fechaPublicacion: '11:20 17/09/21'
        },
        {
            id: 8,
            usuarioId: 3,
            imagen: 'suiteHome.png',
            pieDeImagen: 'Este es un pie de imagen muy largo. Me sirve para ver si el texto está truncado',
            fechaPublicacion: '11:20 17/09/21'
        },
        {
            id: 9,
            usuarioId: 4,
            imagen: 'suiteHome.png',
            pieDeImagen: 'Este es un pie de imagen muy largo. Me sirve para ver si el texto está truncado',
            fechaPublicacion: '11:20 17/09/21'
        },
        {
            id: 10,
            usuarioId: 5,
            imagen: 'suiteHome.png',
            pieDeImagen: 'Este es un pie de imagen muy largo. Me sirve para ver si el texto está truncado',
            fechaPublicacion: '11:20 17/09/21'
        }
    ],
    funIndex : function (position) { // Entrega posteo según la posición en el array
        let resultado
        if ((position >= 0) && (position < posteos.lista.length )) { // Verifica que la posición exista
            for (let index = 0; index < posteos.lista.length; index++) { // Recorre array de lista
                if (position == index) { // Busca objeto de = ID
                    resultado = posteos.lista[index]; // Entrega el objeto comlpeto de la posició del array
                }
            }
        }
    },
    funPorId : function (id) { // Entrega posteo por su ID
        let resultado
        if ((id > 0) && (id <= posteos.lista.length )) { // Verifica que la ID exista
            for (let index = 0; index < posteos.lista.length; index++) { // Recorre array de lista
                if (id == posteos.lista[index].id) { // Busca objeto de = ID
                    resultado = posteos.lista[index]; // Entrega el objeto completo
                }
            }
        }
    },
    funPorUsuarioId : function (usuarioId) { // Entrega posteo según ID de usuario
        let resultado = [];
        if ((usuarioId > 0) && (usuarioId <= usuarios.lista.length )) { // Verifica que la ID del usuario exista
            for (let index = 0; index < posteos.lista.length; index++) { // Recorre array de lista
                if (usuarioId == posteos.lista[index].usuarioId) { // Busca objeto de = ID
                    resultado.push(posteos.lista[index]); // Agrega el objeto completo
                }
            }
        }
    }
}

module.exports = posteos;