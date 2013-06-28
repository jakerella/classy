console.log("Starting server...");

var         pkg = require("../package.json");
        express = require("express"),
           http = require("http"),
         routes = require("./modules/routes.js");

var app = express();

// Config and middleware
app.configure(function () {
    process.env.NODE_ENV = (process.env.NODE_ENV || "production");
    app.set("port", process.env.PORT || 5000);
    app.set("views", __dirname + "/views");
    app.set("view engine", "ejs");
    app.use(express.logger("development"));
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(express.cookieParser("kTh4Yef7NebvCpoY2ewJU9s"));
    app.use(express.session());
    app.use(app.router);
    app.use(express.static(__dirname + "/public"));
});

// Error handling
app.configure("development", function () {
    app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});
app.configure("production", function () {
    app.use(express.errorHandler());
});


// GETs
app.get("/", routes.index);
//app.get("/class", routes.hasToken, routes.listClasses);

// POSTs
app.post("/", routes.index);

// Start server
http.createServer(app).listen(app.get("port"), function () {
    console.log(pkg.name + " server listening on port " + app.get("port"));
});
