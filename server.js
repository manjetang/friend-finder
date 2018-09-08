// var dirname = require('path-__dirname');

var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var port = process.env.port || 3000;
app.use(express.static("./public"));

app.use(bodyParser.urlencoded({extended: true}));
// app.use(express.json());
app.use(bodyParser.json());
// app.use(bodyParser.text());
// app.use(express.static(__dirname + '/app/data/images'));

require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);

app.listen(port, function() {
    console.log("App listening on port: " + port);
});