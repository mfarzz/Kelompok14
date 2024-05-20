var express = require('express');
var router = express.Router();
const verifyTokenAndRole = require('../middleware/verifyTokenAndRole');

/* GET home page. */
// router.get('/not-found', function(req, res, next) {
//   res.render('notfound');
// });

router.get('/home', (req, res) => {
  res.render('user/home'); // Pastikan jalur ini sesuai dengan lokasi sebenarnya dari file tampilan
}); 

// router.post('/userLogin', verifyTokenAndRole(user), user.checklogin);

module.exports = router;
