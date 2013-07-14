
var AUTH_COOKIE = "classy_token";

// This is our auth check for pages
exports.hasToken = function (req, res, next) {
    if (req.cookies[AUTH_COOKIE]) {
        req.session.token = req.cookies[AUTH_COOKIE];
        next();
    } else if (req.xhr) {
        res.send(403, { error: "You will need to login before accessing this resource" });
    } else if (req.url !== "/") {
        res.redirect("/");
    }
};

exports.index = function(req, res, next) {
    res.render("index", { "title": "Classy Home" });
};

exports.showAbout = function(req, res, next) {
    res.render("about", { "title": "About Classy" });
};

exports.showCourses = function(req, res, next) {
    res.render("courses", { "title": "Classy Course Listing" });
};

exports.showRegister = function(req, res, next) {
    res.render("register", { "title": "Classy Registration" });
};
