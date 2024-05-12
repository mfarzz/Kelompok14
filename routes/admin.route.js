var express = require('express');
var router = express.Router();
const verifyTokenAndRole = require('../middleware/verifyTokenAndRole');

/* GET home page. */
router.get('/dashboard', verifyTokenAndRole('admin') ,function(req, res, next) {
  res.render('admin/dashboard'); 
});

// router.post('/userLogin', verifyTokenAndRole(user), user.checklogin);

module.exports = router;
