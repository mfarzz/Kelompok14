var express = require("express");
var router = express.Router();

/* GET home page. */

router.get('/', function(req, res) {
  res.render('beranda');

router.get("/login", function (req, res) {
	res.render("login");
});

router.get("/change-password", function (req, res) {
	res.render("change-password");

});

router.get('/login', function(req, res){
  res.render('login');
});

module.exports = router;
