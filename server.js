var express = require("express");
var app = express();
var fs = require("fs");
var content = fs.readFileSync("./matchboxbrasil.json");
var json = JSON.parse(content);

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.listen(8000, () => {
 console.log("Server running on port 8000");
});

app.get("/", (req, res, next) => {
    res.json([json]);
});