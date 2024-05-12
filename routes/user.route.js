var express = require('express');
var router = express.Router();
const verifyTokenAndRole = require('../middleware/verifyTokenAndRole');

/* GET home page. */
// router.get('/not-found', function(req, res, next) {
//   res.render('notfound');
// });

router.get('/home',verifyTokenAndRole('user'), function(req, res, next) {
  res.render('user/home');
});

// router.post('/userLogin', verifyTokenAndRole(user), user.checklogin);

module.exports = router;
