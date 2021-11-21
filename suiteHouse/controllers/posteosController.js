const db = require('../database/models');
const Posteos = db.Posteo;
const Usuarios = db.Usuario;
const op = db.Sequelize.Op;

const posteosController = {
    index : (req,res) => {
        Posteos.findAll(
            {
                include: [
                    {association: 'usuario_posteo'},
                    {association: 'comentarios_posteo', include: 'usuario_comentario'}
                ],
                order: [['createdAt', 'DESC']],
            }
        )
        .then((data) => {
            res.render('index', {style: 'index', posteos: data})
        })
        .catch((err) => {
            return res.send(err);
        })
    },
    detallePost : (req,res) =>{
        Posteos.findOne({
            where: {'id': req.params.id},
            include: [
                {association: 'usuario_posteo'},
                {association: 'comentarios_posteo', include: 'usuario_comentario'},
            ]
        })
        .then((data) => {
            if(data) {
                return res.render('detallePost', {style: 'detallePost', posteo: data});
            } else {
                res.send('No se ha encontrado el posteo solicitado');
                // res.redirect('/');
            }
        })
        .catch((err) => {
            return res.send(err);
        })
    },
    buscador: (req,res,next) => {
        let search = req.query.search;
        let filtro = req.query.filtro;
        if(filtro === 'usuario') {
            Usuarios.findAll({
                where: [
                    {'nombreUsuario': {[op.like]: `%${search}%`}}
                ],
                order: [
                    ['nombreUsuario','ASC']
                ],
                limit: 10
            })
            .then(data => {
                return res.render('resultadoBusqueda', {style: 'resultadoBusqueda', usuarios: data, posteos: {}})
            })
            .catch(err => {
                return res.send(err)
            });
        }else if(filtro === 'posteo') {
            Posteos.findAll({
                where: [
                    {'piePublicacion': {[op.like]:`%${search}%`}}
                ],
                order: [
                    ['createdAt','DESC']
                ],
                limit: 10,
                include: [
                    {association: 'usuario_posteo'}
                ]
            })
            .then(data => {
                return res.render('resultadoBusqueda', {style: 'resultadoBusqueda', posteos: data, usuarios: {}})
            })
            .catch(err => {
                return res.send(err)
            });
        }

    },
    vistaAgregarPost: (req, res) => {
        if(req.session.user === undefined) {
            return res.redirect('/login');
        } else {
            return res.render('agregarPost', {style: 'agregarPost'})
        }
    },
    agregarPost: (req, res) => {
        Usuarios.findOne({
            where: {'id': req.session.user.id}
        })
        .then((data) => {
            if(data) {
                Posteo.create({
                    imagenPosteo: req.file.filename,
                    piePublicacion: req.body.piePublicacion,
                    usuarioId: data.id,
                    usuario_posteo: data
                })
                    .then((data) => {
                        return res.redirect('/')
                        // return res.redirect('/detalleUsuario/' + req.session.user.id);
                    })
                    .catch((err) => {
                        return res.send(err);
                    })
            } else {
                res.send(data)
            }
        })
        .catch((err) => {
            return res.send(err);
        })
    }
}

module.exports = posteosController;
