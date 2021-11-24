var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const db = require('./database/models')
const session = require('express-session');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const detallePostRouter = require('./routes/detallePost');
const agregarPostRouter = require('./routes/agregarPost');
const detalleUsuarioRouter = require('./routes/detalleUsuario');
const editarPerfilRouter = require('./routes/editarPerfil');
const loginRouter = require('./routes/login');
const logoutRouter = require('./routes/logout');
const miPerfilRouter = require('./routes/miPerfil');
const registrarseRouter = require('./routes/registrarse');
const registroExitosoRouter = require('./routes/registroExitoso');
const resultadoBusquedaRouter = require('./routes/resultadoBusqueda');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret: "Mi palabra secreta de aplicación!",
  resave: true,
  saveUninitialized: false
}))

app.use(function(req, res, next){
  if(req.cookies.usuarioId != undefined && req.session.user == undefined){
    db.Usuario.findByPk(req.cookies.usuarioId)
    .then(user => {
      req.session.user = user.email
      res.locals.user = req.session.user
    })
  }
  return next();
})

app.use(function(req, res, next){
  res.locals.user = null
  if(req.session.user != undefined){
    res.locals.user = req.session.user
  }
  return next()
})

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/detallePost', detallePostRouter);
app.use('/agregarPost', agregarPostRouter);
app.use('/detalleUsuario', detalleUsuarioRouter);
app.use('/editarPerfil', editarPerfilRouter);
app.use('/login', loginRouter);
app.use('/logout', logoutRouter);
app.use('/miPerfil', miPerfilRouter);
app.use('/registrarse', registrarseRouter);
app.use('/registroExitoso', registroExitosoRouter);
app.use('/resultadoBusqueda', resultadoBusquedaRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
