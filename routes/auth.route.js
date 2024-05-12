var express = require('express');
var router = express.Router();
const controller = require('../controller/auth.controller')
const notLogin=require ('../middleware/notLogin')
/* GET home page. */
router.get('/login',notLogin, controller.form);
router.post('/login', controller.checklogin);
router.post('/logout', controller.logout);


module.exports = router;
