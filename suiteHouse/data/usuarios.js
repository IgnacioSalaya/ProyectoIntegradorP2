const usuarios = {
    lista: [
        {
            id: 1,
            mail: 'usuario1@gmail.com',
            contraseña: 'contraseña123',
            fechaNacimiento: '01/01/2000',
            usuario: 'SuiteHome', // Único por usuario
            nombre: 'Suite',
            apellido: 'Home',
            fotoDePerfil: 'perfil-suiteHome.png',
            seguidores: 501,
            seguidos: 105
        },
        {
            id: 2,
            mail: 'usuario2@gmail.com',
            contraseña: 'contraseña123',
            fechaNacimiento: '01/01/2000',
            usuario: 'Brandan2', // Único por usuario
            nombre: 'Brandan',
            apellido: 'Dos',
            fotoDePerfil: 'perfil-Brandan.png',
            seguidores: 501,
            seguidos: 105
        },
        {
            id: 3,
            mail: 'usuario3@gmail.com',
            contraseña: 'contraseña123',
            fechaNacimiento: '01/01/2000',
            usuario: 'Maira3', // Único por usuario
            nombre: 'Maira',
            apellido: 'Tres',
            fotoDePerfil: 'perfil-Maira.png',
            seguidores: 501,
            seguidos: 105
        },
        {
            id: 4,
            mail: 'usuario4@gmail.com',
            contraseña: 'contraseña123',
            fechaNacimiento: '01/01/2000',
            usuario: 'Sol4', // Único por usuario
            nombre: 'Sol',
            apellido: 'Cuatro',
            fotoDePerfil: 'perfil-Sol.png',
            seguidores: 501,
            seguidos: 105
        },
        {
            id: 5,
            mail: 'usuario5@gmail.com',
            contraseña: 'contraseña123',
            fechaNacimiento: '01/01/2000',
            usuario: 'Spencer5', // Único por usuario
            nombre: 'Spencer',
            apellido: 'Cinco',
            fotoDePerfil: 'perfil-Spencer.png',
            seguidores: 501,
            seguidos: 105
        },
        {
            id: 6,
            mail: 'usuario1@gmail.com',
            contraseña: 'contraseña123',
            fechaNacimiento: '01/01/2000',
            usuario: 'SuiteHome', // Único por usuario
            nombre: 'Suite',
            apellido: 'Home',
            fotoDePerfil: 'perfil-suiteHome.png',
            seguidores: 501,
            seguidos: 105
        },
        {
            id: 7,
            mail: 'usuario2@gmail.com',
            contraseña: 'contraseña123',
            fechaNacimiento: '01/01/2000',
            usuario: 'Brandan2', // Único por usuario
            nombre: 'Brandan',
            apellido: 'Dos',
            fotoDePerfil: 'perfil-Brandan.png',
            seguidores: 501,
            seguidos: 105
        },
        {
            id: 8,
            mail: 'usuario3@gmail.com',
            contraseña: 'contraseña123',
            fechaNacimiento: '01/01/2000',
            usuario: 'Maira3', // Único por usuario
            nombre: 'Maira',
            apellido: 'Tres',
            fotoDePerfil: 'perfil-Maira.png',
            seguidores: 501,
            seguidos: 105
        },
        {
            id: 9,
            mail: 'usuario4@gmail.com',
            contraseña: 'contraseña123',
            fechaNacimiento: '01/01/2000',
            usuario: 'Sol4', // Único por usuario
            nombre: 'Sol',
            apellido: 'Cuatro',
            fotoDePerfil: 'perfil-Sol.png',
            seguidores: 501,
            seguidos: 105
        },
        {
            id: 10,
            mail: 'usuario5@gmail.com',
            contraseña: 'contraseña123',
            fechaNacimiento: '01/01/2000',
            usuario: 'Spencer5', // Único por usuario
            nombre: 'Spencer',
            apellido: 'Cinco',
            fotoDePerfil: 'perfil-Spencer.png',
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