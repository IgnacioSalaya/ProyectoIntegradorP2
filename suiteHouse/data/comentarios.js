const usuario = require('./usuarios')

const usuarioComentario = [
    {
        usuario: usuario[0].usuario,
        fotoDePerfil: usuario[0].fotoDePerfil,
        id: 0,
        comentario: 'Este es un comentario x'
    },
    {
        usuario: usuario[1].usuario,
        fotoDePerfil: usuario[1].fotoDePerfil,
        id: 1,
        comentario: 'En este comentario tu crush te dice que sos lindo'
    },
    {
        usuario: usuario[2].usuario,
        fotoDePerfil: usuario[2].fotoDePerfil,
        id: 2,
        comentario: 'En este otro, tu tía Marta te dice que sos el más lindo de la familia'
    },
    {
        usuario: usuario[3].usuario,
        fotoDePerfil: usuario[3].fotoDePerfil,
        id: 3,
        comentario: 'Tu amigo te pone corazoncitos'
    },
    {
        usuario: usuario[4].usuario,
        fotoDePerfil: usuario[4].fotoDePerfil,
        id: 4,
        comentario: 'Este es el comentario no tiene ningún sentido'
    }
]

module.exports = usuarioComentario