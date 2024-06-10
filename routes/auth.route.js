var express = require("express");
var router = express.Router();
const authController = require("../controller/auth.controlller");
const {
	isAuthenticated,
	isAuthorized,
} = require("../middleware/session.middleware");
const { render } = require("ejs");

router.get("/", isAuthenticated, isAuthorized);

router.post("/login", authController.login);
router.post("/change-password", authController.changePassword);
router.post("/logout", authController.logout);

module.exports = router;
