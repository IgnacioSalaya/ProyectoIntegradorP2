const usuarios = {
    lista: [
        {
            id: 1,
            usuario: 'Usuario1', // Único por usuario
            nombre: 'Usuario', // Arreglar comillas
            apellido: 'Uno',
            fotoDePerfil: 'homeProfile.png'
        },
        {
            id: 2,
            usuario: 'Usuario2', // Único por usuario
            nombre: 'Usuario',
            apellido: 'Dos',
            fotoDePerfil: 'homeProfile.png'
        },
        {
            id: 3,
            usuario: 'Usuario3', // Único por usuario
            nombre: 'Usuario',
            apellido: 'Tres',
            fotoDePerfil: 'homeProfile.png'
        },
        {
            id: 4,
            usuario: 'Usuario4', // Único por usuario
            nombre: 'Usuario',
            apellido: 'Cuatro',
            fotoDePerfil: 'homeProfile.png'
        },
        {
            id: 5,
            usuario: 'Usuario5', // Único por usuario
            nombre: 'Usuario',
            apellido: 'Cinco',
            fotoDePerfil: 'homeProfile.png'
        }
    ],
    funIndex : function (position) { // Entrega usuario según la posición en el array
        let resultado = '';
        if ((position >= 0) && (position < usuarios.lista.length )) { // Verifica que la posición exista
            for (let index = 0; index < usuarios.lista.length; index++) { // Recorre array de lista
                if (position == index) { // Busca objeto de = ID
                    resultado = usuarios.lista[index]; // Entrega el objeto de la posició del array
                }
            }
        }
    },
    funPorID : function (id) { // Entrega usuario por su ID
        let resultado = '';
        if ((id > 0) && (id <= usuarios.lista.length )) { // Verifica que la ID exista
            for (let index = 0; index < usuarios.lista.length; index++) { // Recorre array de lista
                if (id == usuarios.lista[index].id) { // Busca objeto de = ID
                    resultado = usuarios.lista[index]; // Entrega el objeto completo
                }
            }
        }
    }
}
module.exports = usuarios;