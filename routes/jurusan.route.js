var express = require('express');
var router = express.Router();
const { isAuthenticated, isAuthorized} = require('../middleware/session.middleware')

router.get('/',isAuthenticated,isAuthorized('prodi'),function(req, res) {
    res.render('berandaJurusan',{ userEmail: req.session.userId });
});

module.exports = router;
