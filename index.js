var express = require("express");
var app = express();

// app.use(express.static(__dirname + '/public'));
// app.use(express.static(__dirname + '/ressources'));
app.use(express.static("publicFormTiki"));
app.set("view engine", "ejs");
app.set("views", "./views");
// port
app.listen("8080");
console.log("hello node");

app.get("/", function (req, res) {
  res.render("homepage");

})

