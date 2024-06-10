var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session')
var SequelizeStore = require('connect-session-sequelize')(session.Store);
var sequelize = require('./models').sequelize;

var indexRouter = require('./routes/index');
var fakultasRouter = require('./routes/fakultas.route');
var jurusanRouter = require('./routes/jurusan.route');
var authRouter = require('./routes/auth.route');
var jurusanMatakuliahRoute = require('./routes/jurusanMataKuliah.route');

var app = express();

var sessionStore = new SequelizeStore({
  db: sequelize,
  tableName: 'Sessions', 
  checkExpirationInterval: 15 * 60 * 1000,
  expiration: 24 * 60 * 60 * 1000
});

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false,
  store: sessionStore,
  cookie: { maxAge: 24 * 60 * 60 * 1000 }
}));

sequelize.sync();

app.set('views',
  [
    path.join(__dirname, "/views/fakultas"),
    path.join(__dirname, "/views/jurusan"),
    path.join(__dirname, "/views"),
]);
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/fakultas', fakultasRouter)
app.use('/prodi', jurusanRouter)
app.use('/auth', authRouter)
app.use('/prodi/matakuliah', jurusanMatakuliahRoute)

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
