const bcrypt = require('bcryptjs');
const db = require('../database/models');
const Usuario = db.Usuario;
const Posteos = db.Posteo;

// const usuarios = require('../data/usuarios');
// const posteos = require('../data/posteos');
// const comentarios = require('../data/comentarios');

const usuariosController = {
    detalleUsuario: (req, res) => {

    },
    miPerfil: (req, res) => { //falta modificar vista
        if(req.session.user === undefined) {
            return res.redirect('/');
        } else {
            Usuario.findOne({
                where: {'id': req.session.user.id},
                include: [
                    {association: 'posteos_usuario'}
                ]
            })
            .then((data) => {
                delete data.contrasenia
                return res.render('miPerfil', {style: 'miPerfil', usuario: data})
            })
            .catch((err) => {
                return res.send(err);
            })
        } 
    },
    mostrarPerfil: (req, res) => {
        Usuario.findOne({
            where: {'id': req.session.user.id}
        })
        .then((data) => {
            if(data) {
                res.render('editarPerfil', { style: 'editarPerfil', usuario: data})
            } else {
                res.send('Usuario no encontrado')
            }
        })
        .catch((err) => {
            res.send(err);
        })
    },
    editarPerfil : (req,res) => {
        Usuario.findOne({
            where: {'id': req.session.user.id}
        })
        .then((data) => {
            
            if(data) {
                res.send('Página en reparación')
                // Usuario.update({
                //     imagenPerfil: req.file.filename,
                //     nombreUsuario: req.body.nombreUsuario,
                //     nombre: req.body.nombre,
                //     apellido: req.body.apellido,
                //     email: req.body.email,
                //     fecNac: req.body.fecNac,
                //     contrasenia: contraseniaNuevaEncriptada
                // },
                // {
                //     where: {'id': req.session.user.id}
                // })
                // .then(data => {
                //     fs.unlink('./' + data.imagenPerfil)
                //     .then(() => {
                //     }).catch(err => {
                //         return res.send(err);
                //     })
                //     res.redirect("/editarPerfil")
                // })
                // .catch((err) => {
                //     return res.send(err);
                // })

            } else {
                res.send('Usuario no encontrado')
            }
        })
        .catch((err) => {
            res.send(err);
        })
    },
    login: (req, res) => {
        if(req.session.user === undefined) {
            res.render('login', {style: 'login'})
        } else {
            res.redirect('/')
        }
    },
    loguearse: (req, res) => {
        db.Usuario.findOne({
            where: {
                email: req.body.email
            }
        })
        .then(data => {
            if(data) {
                if(bcrypt.compareSync(req.body.contrasenia, data.contrasenia)){
                    delete data.contrasenia;
                    req.session.user = data;
                    if(req.body.recordarme){
                        res.cookie('usuarioId', data.id, {maxAge: 1000 * 60 * 30})
                    }
                    res.redirect('/');
                } else {
                    res.send('Contraseña incorrecta') // arreglar manejo de errores
                }
            } else {
                res.send('No se ha encontrado este usuario') // arreglar manejo de errores
            }
        })
        .catch(err => {
            res.send(err)
        })
    },
    logout: (req, res) => {
        req.session.destroy();
        res.clearCookie('usuarioId');
        res.redirect('/'); 
    },
    registrarse: (req, res) => {
        if(req.session.user === undefined) {
            res.render('registrarse', {style: 'registrarse'})
        } else {
            res.redirect('/')
        }
    },
    nuevoUsuario: (req, res, next) => {

        const expresionesRegex = {
            nombre: /^[a-zA-ZÁ-ÿ\s]{1,40}$/,
            apellido: /^[a-zA-ZÁ-ÿ\s]{1,40}$/,
            nombreUsuario: /^[a-zA-Z0-9]*(!\s)*$/,
            email: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
            contrasenia: /(?=^.{8,32}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/
        }

        let nombreUsuario
        if(expresionesRegex.nombreUsuario.test(req.body.nombreUsuario)) {
            nombreUsuario = req.body.nombreUsuario
        } else {
            res.send("El nombre de usuario no tiene la sintaxis correcta")
        }
        let emailValidado
        if (expresionesRegex.email.test(req.body.email)) {
            emailValidado = req.body.email;
        } else {
            res.send("El mail no tiene la sintaxis correcta");
        }
        let contraseniaEncriptada
        if (expresionesRegex.contrasenia.test(req.body.contrasenia)) {
            contraseniaEncriptada = bcrypt.hashSync(req.body.contrasenia, 10);
        } else {
            res.send("La contraseña no tiene la sintaxis correcta");
        }
        let fotoPerfil
        if (req.file) {
            fotoPerfil = req.file.filename;
        } else {
            fotoPerfil = 'imagenPerfil-generica.png';
        }

        Usuario.findOne({
            where: [{
                nombreUsuario: req.body.nombreUsuario
            }]
        })
        .then(resultado => {
            if(resultado) {
                res.send('Usuario repetido')
            } else {
                Usuario.findOne({
                    where: [{
                        email: req.body.email
                    }]
                })
                .then(resultado => {
                    let emailRepetido
                    if (resultado) {
                        emailRepetido = resultado.email
                    }
                    if (emailRepetido === req.body.email) {
                        res.send('Mail repetido!')
                    } else {
                        Usuario.create({
                            nombreUsuario: req.body.nombreUsuario,
                            nombre: req.body.nombre,
                            apellido: req.body.apellido,
                            fecNac: req.body.fecNac,
                            email: emailValidado,
                            contrasenia: contraseniaEncriptada,
                            imagenPerfil: fotoPerfil
                        })
                        .then(usuario => {
                            res.redirect('/registroExitoso/' + req.body.nombreUsuario);
                        })
                        .catch(err => {
                            res.send(err);
                        })
                    }
                })
                .catch((err) => {
                    return res.send(err);
                })
            }
        })
        .catch((err) => {
            return res.send(err);
        })
    },
    registroExitoso: (req, res) => {
        Usuario.findOne({
            where: [
                {nombreUsuario: req.params.nombreUsuario}
            ]
        })
        .then((data) => {
            delete data.contrasenia
            if(data.createdAt < (Date.now() - 1000) ) {
                return res.redirect('/registrarse')
            } else {
                return res.render('registroExitoso', {style: 'registroExitoso', usuario: data.nombreUsuario})
            }
        })
        .catch((err) => {
            return res.send(err)
        })
    }
}

module.exports = usuariosController;