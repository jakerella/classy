/*
Simple chat server to be used with chat.html in this same directory

To run, simple execute this from the command line: node chatServer.js
Then, open http://localhost:8686 in one or more browsers
 */

var app = require("http").createServer(handler),
    io = require("socket.io").listen(app),
    fs = require("fs");

app.listen(8686);

function handler (req, res) {
    fs.readFile(__dirname + "/chat.html",
    function (err, data) {
        if (err) {
            res.writeHead(500);
            return res.end("Error loading chat.html");
        }

        res.writeHead(200);
        res.end(data);
    });
}

io.sockets.on("connection", function (socket) {
    socket.on("incoming", function (data) {
        console.log("INCOMING MESSAGE: ", data);
        io.sockets.emit("message", { message: data.message });
    });
});
