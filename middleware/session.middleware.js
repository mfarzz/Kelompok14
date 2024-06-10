const isAuthenticated = (req, res, next) => {
    if (req.session.userId) {
        return next();
    }
    res.redirect('/login');
};

const isAuthorized = (role) => {
    return (req, res, next) => {
        if (req.session.role === role) {
            return next();
        }
        res.redirect('/');
    };
};

const sessionChecker = (req, res, next) => {
    if (req.session.userId) {
        res.locals.userEmail = req.session.userId;
    }
    next();
};

module.exports = {
    isAuthenticated,
    isAuthorized,
    sessionChecker
}
