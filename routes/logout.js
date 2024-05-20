var express = require('express');
var router = express.Router();
const session = require('express-session');

// Middleware to initialize session
router.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: true
}));


/* GET home page. */
router.get('/', function(req, res, next) {
  const userLoggedIn = req.session.userLoggedIn || false;
  const user = req.session.user;
  res.render('login', { title: 'Pendaftaran Kelas Antar Prodi Universitas Andalas', userLoggedIn: userLoggedIn, user: user });
});

module.exports = router;
