const bcrypt = require('bcryptjs');
const db = require('../database/models');
const Usuario = db.Usuario;
const Comentario = db.Comentario

const expresionesRegex = {
    nombre: /^[a-zA-ZÁ-ÿ\s]{1,40}$/, 
            // las barras diagonales derechas indican donde comienza y termina la 
            // secuencia de la expresión regular. El simbolo "^" indica donde comienza nuestro patrón
            // [a-zA-ZÁ-ÿ\s] significa que se aceptan caracteres del tipo minusculas, mayosculas y caracteres con tildes, según tabla ascii
            // "\s" expresa la posibilidad de que se introduzcan espacios. Por último, las llaves indican
            // la longitud esperada de la expresión
    apellido: /^[a-zA-ZÁ-ÿ\s]{1,40}$/, // El patrón es el mismo para apellido
    nombreUsuario: /^[a-zA-Z0-9]*(!\s)*$/, 
            // Acá cambian los caracteres permitidos, [a-zA-Z0-9] indicia que solo se permiten minus, mayus y numeros
            // *(!\s) expresa que no se permitiran espacios y "$" indica el fin de la expresión
    email: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
            // Este es más complejo, ahora nuestra secuencia indica un intervalo de caracteres (minus, mayus y numeros)
            // y además, por extensión se definen otros caracteres posibles ".!#$%&’*+/=?^_`{|}~-", el corchete define el fin 
            // de la secuencia parcial y pide que el simbolo arroba "@" sea obligatorio dentro del patrón, seguido de minus
            // mayus y numeros. También, será necesario que se agregué, despues de esta pequeña secuencia, una terminación del tipo
            // "." punto y algunos caracteres (minus, mayus y numeros) No define longitud min ni max.
    contrasenia: /(?=^.{8,32}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/
            // Este patrón nos exige que tenga entre 8 y 32 caracteres con la afirmación anticipada "?=", 
            // nuevamente se realiza una afirmación anticipada para decir que  los digitos son permitidos. El simbolo "|" expresa un OR (operador lógico)
            // Ahora, son permitidas las palabras W = word, tambien se niega la afirmacion anticipada para decir que no es posible agregar más líneas
            // por último permite caracteres mayusculas y minusculas, antes de dar por finalizado el patrón
} 
            // ----> Tabla de referencias regex https://cheatography.com/davechild/cheat-sheets/regular-expressions/pdf/

const usuariosController = {
    detalleUsuario: (req, res) => {  
        Usuario.findOne({
            where: {'id': req.params.id},
            include: [
                {association: 'posteos_usuario'}
            ]
        })
        .then((data) => {
            if(data) {
                res.render('detalleUsuario', {style: 'detalleUsuario', usuario: data});
            } else {
                res.send('No se ha encontrado el usuario solicitado');
                // res.redirect('/');
            }
        })
        .catch((err) => {
            return res.send(err);
        })

    },
    miPerfil: (req, res) => { //falta modificar vista
        if(req.session.user === undefined) {
            res.redirect('/login');
        } else {
            Usuario.findOne({
                where: {'id': req.session.user.id},
                include: [
                    {association: 'posteos_usuario'}
                ]
            })
            .then((data) => {
                data.contrasenia = undefined
                res.render('miPerfil', {style: 'miPerfil', usuario: data})
            })
            .catch((err) => {
                res.send(err);
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
                
                let name = data.nombre;
                if(req.body.nombre) {
                    name = req.body.nombre
                }
                let lastName = data.apellido;
                if(req.body.apellido) {
                    lastName = req.body.apellido
                }
                let dob = data.fecNac; // dob = date of birth
                if(req.body.fecNac) {
                    dob = req.body.fecNac
                }
                let foto = data.imagenPerfil; // tener en cuenta que no se actualiza la imagen en la vista
                if(req.file) {
                    foto = req.file.filename
                }

                Usuario.update({
                    nombre: name,
                    apellido: lastName,
                    fecNac: dob,
                    imagenPerfil: foto
                },
                {
                    where: {'id': req.session.user.id}
                })
                .then(data => {
                    res.redirect("/miPerfil")
                })
                .catch((err) => {
                    return res.send(err);
                })
                
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
                    req.session.user = data;
                    if(req.body.recordarme){
                        res.cookie('usuarioId', data.id, {maxAge: 1000 * 60 * 30})
                    }
                    res.redirect('/');
                } else {
                    res.send('Contraseña incorrecta')
                }
            } else {
                res.send('No se ha encontrado este usuario')
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

        let nombreUsuario
        if(expresionesRegex.nombreUsuario.test(req.body.nombreUsuario)) { 
                // test es un método que poseen las expresiones regulares
                // que devuelve true o false en función de que se confirme que
                // la secuencia que introdujo el usuario corresponde con 
                // la secuencia solicitada.
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
            data.contrasenia = undefined
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