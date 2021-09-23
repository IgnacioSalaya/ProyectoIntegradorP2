const posteos = {
    lista: [
        {
            id: 1,
            usuarioId: 1, // Autor
            imagen: 'suiteHome.png',
            pieDeImagen: 'Este es un pie de imagen muy largo. Me sirve para ver si el texto está truncado'
        },
        {
            id: 2,
            usuarioId: 2,
            imagen: 'suiteHome.png',
            pieDeImagen: 'Este es un pie de imagen muy largo. Me sirve para ver si el texto está truncado'
        },
        {
            id: 3,
            usuarioId: 2,
            imagen: 'suiteHome.png',
            pieDeImagen: 'Este es un pie de imagen muy largo. Me sirve para ver si el texto está truncado'
        },
        {
            id: 4,
            usuarioId: 3,
            imagen: 'suiteHome.png',
            pieDeImagen: 'Este es un pie de imagen muy largo. Me sirve para ver si el texto está truncado'
        },
        {
            id: 5,
            usuarioId: 4,
            imagen: 'suiteHome.png',
            pieDeImagen: 'Este es un pie de imagen muy largo. Me sirve para ver si el texto está truncado'
        }
    ],
    funIndex : function (position) { // Entrega posteo según la posición en el array
        let resultado = '';
        if ((position >= 0) && (position < posteos.lista.length )) { // Verifica que la posición exista
            for (let index = 0; index < posteos.lista.length; index++) { // Recorre array de lista
                if (position == index) { // Busca objeto de = ID
                    resultado = posteos.lista[index]; // Entrega el objeto comlpeto de la posició del array
                }
            }
        }
    },
    funPorID : function (id) { // Entrega posteo por su ID
        let resultado = '';
        if ((id > 0) && (id <= posteos.lista.length )) { // Verifica que la ID exista
            for (let index = 0; index < posteos.lista.length; index++) { // Recorre array de lista
                if (id == posteos.lista[index].id) { // Busca objeto de = ID
                    resultado = posteos.lista[index]; // Entrega el objeto completo
                }
            }
        }
    }
}

module.exports = posteos;