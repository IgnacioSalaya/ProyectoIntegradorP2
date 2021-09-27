const usuarios = {
    lista: [
        {
            id: 1,
            mail: 'usuario@gmail.com',
            contraseña: 'contraseña123',
            fechaNacimiento: '01/01/2000',
            usuario: 'Usuario1', // Único por usuario
            nombre: 'Usuario', // Arreglar comillas
            apellido: 'Uno',
            fotoDePerfil: 'homeProfile.png',
            seguidores: 501,
            seguidos: 105
        },
        {
            id: 2,
            mail: 'usuario@gmail.com',
            contraseña: 'contraseña123',
            fechaNacimiento: '01/01/2000',
            usuario: 'Usuario2', // Único por usuario
            nombre: 'Usuario',
            apellido: 'Dos',
            fotoDePerfil: 'homeProfile.png',
            seguidores: 501,
            seguidos: 105
        },
        {
            id: 3,
            mail: 'usuario@gmail.com',
            contraseña: 'contraseña123',
            fechaNacimiento: '01/01/2000',
            usuario: 'Usuario3', // Único por usuario
            nombre: 'Usuario',
            apellido: 'Tres',
            fotoDePerfil: 'homeProfile.png',
            seguidores: 501,
            seguidos: 105
        },
        {
            id: 4,
            mail: 'usuario@gmail.com',
            contraseña: 'contraseña123',
            fechaNacimiento: '01/01/2000',
            usuario: 'Usuario4', // Único por usuario
            nombre: 'Usuario',
            apellido: 'Cuatro',
            fotoDePerfil: 'homeProfile.png',
            seguidores: 501,
            seguidos: 105
        },
        {
            id: 5,
            mail: 'usuario@gmail.com',
            contraseña: 'contraseña123',
            fechaNacimiento: '01/01/2000',
            usuario: 'Usuario5', // Único por usuario
            nombre: 'Usuario',
            apellido: 'Cinco',
            fotoDePerfil: 'homeProfile.png',
            seguidores: 501,
            seguidos: 105
        },
        {
            id: 6,
            mail: 'usuario@gmail.com',
            contraseña: 'contraseña123',
            fechaNacimiento: '01/01/2000',
            usuario: 'Usuario5', // Único por usuario
            nombre: 'Usuario',
            apellido: 'Cinco',
            fotoDePerfil: 'homeProfile.png',
            seguidores: 501,
            seguidos: 105
        },
        {
            id: 7,
            mail: 'usuario@gmail.com',
            contraseña: 'contraseña123',
            fechaNacimiento: '01/01/2000',
            usuario: 'Usuario5', // Único por usuario
            nombre: 'Usuario',
            apellido: 'Cinco',
            fotoDePerfil: 'homeProfile.png',
            seguidores: 501,
            seguidos: 105
        },
        {
            id: 8,
            mail: 'usuario@gmail.com',
            contraseña: 'contraseña123',
            fechaNacimiento: '01/01/2000',
            usuario: 'Usuario5', // Único por usuario
            nombre: 'Usuario',
            apellido: 'Cinco',
            fotoDePerfil: 'homeProfile.png',
            seguidores: 501,
            seguidos: 105
        },
        {
            id: 9,
            mail: 'usuario@gmail.com',
            contraseña: 'contraseña123',
            fechaNacimiento: '01/01/2000',
            usuario: 'Usuario5', // Único por usuario
            nombre: 'Usuario',
            apellido: 'Cinco',
            fotoDePerfil: 'homeProfile.png',
            seguidores: 501,
            seguidos: 105
        },
        {
            id: 10,
            mail: 'usuario@gmail.com',
            contraseña: 'contraseña123',
            fechaNacimiento: '01/01/2000',
            usuario: 'Usuario5', // Único por usuario
            nombre: 'Usuario',
            apellido: 'Cinco',
            fotoDePerfil: 'homeProfile.png',
            seguidores: 501,
            seguidos: 105
        }
    ],
    funIndex : function (position) { // Entrega usuario según la posición en el array
        let resultado;
        if ((position >= 0) && (position < usuarios.lista.length )) { // Verifica que la posición exista
            for (let index = 0; index < usuarios.lista.length; index++) { // Recorre array de lista
                if (position == index) { // Busca objeto de = ID
                    resultado = usuarios.lista[index]; // Entrega el objeto de la posició del array
                }
            }
        }
        return resultado;
    },
    funPorId : function (id) { // Entrega usuario por su ID
        let resultado;
        if ((id > 0) && (id <= usuarios.lista.length )) { // Verifica que la ID exista
            for (let index = 0; index < usuarios.lista.length; index++) { // Recorre array de lista
                if (id == usuarios.lista[index].id) { // Busca objeto de = ID
                    resultado = usuarios.lista[index]; // Entrega el objeto completo
                }
            }
        }
        return resultado;
    }
}
module.exports = usuarios;