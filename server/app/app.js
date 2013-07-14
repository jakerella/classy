console.log("Starting server...");

var         pkg = require("../package.json"),
        express = require("express"),
           http = require("http"),
         routes = require("./modules/routes.js");

var app = express();

// Config and middleware
process.env.NODE_ENV = (process.env.NODE_ENV || "production");

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

app.use(express.bodyParser());
app.use(express.cookieParser());
app.use(express.session({ secret: "p3G74jD8qmgC7jaEi0" }));
app.use(app.router);
app.use(express.static(__dirname + "/public"));

app.use(function(err, req, res, next) {
    console.error("Nasty error:", err.message, err.stack);
    res.send((err.status || 500), "Server Error");
});


// GETs
app.get("/", routes.index);
app.get("/home", routes.index);
app.get("/about", routes.showAbout);
app.get("/courses", routes.showCourses);
app.get("/register", routes.showRegister);


// POSTs
app.post("/", routes.index);


// Start server
app.listen(5000);
console.log(pkg.name + " server listening on port 5000");
