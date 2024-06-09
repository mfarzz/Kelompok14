var express = require('express');
var router = express.Router();
const authController = require('../controller/auth.controlller');
const { isAuthenticated, isAuthorized} = require('../middleware/session.middleware')

router.get('/',isAuthenticated,isAuthorized('fakultas'),function(req, res) {
    res.render('berandaFakultas');
});

module.exports = router;
