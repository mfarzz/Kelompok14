const jwt = require ('jsonwebtoken')

function notLogin(req, res, next) {
const token = req.cookies.token;


if (token) {
jwt.verify(token,process.env.ACCESS_TOKEN_SECRET, function (err, decoded) {
    if (err) {
    return res
        .status(500)
        .send({
        auth: false,
        message: "Gagal untuk melakukan verifikasi token.",
        });
    }

    req.userId = decoded.id;
    req.userRole = decoded.role;
    req.userEmail = decoded.email;
});
if (req.userRole == "user"){
      return res.redirect("/home");
    } else if (req.userRole == "admin"){
      return res.redirect("/admin/dashboard");
    } 
}

next();
}

module.exports = notLogin;
