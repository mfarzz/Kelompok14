var express = require('express');
var router = express.Router();
const verifyTokenAndRole = require('../middleware/verifyTokenAndRole');
const controller = require ('../controller/mahasiswa.controller');

/* GET home page. */
// router.get('/not-found', function(req, res, next) {
//   res.render('notfound');
// });

router.get('/home',verifyTokenAndRole('user'),controller.profil_mahasiswa, function(req, res) {
  res.render('user/home');
});

// router.get('/home', verifyTokenAndRole('user'), controller.profil_mahasiswa);

// router.post('/userLogin', verifyTokenAndRole(user), user.checklogin);

module.exports = router;
