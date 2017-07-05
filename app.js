var express = require("express");
var session = require('express-session');
var controller = require("./controller/controller.js");

var app = express();

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}))


app.set("view engine","ejs");
app.use(express.static("./public"));

//Â·ÓÉ±í
app.get("/",controller.showIndex);
app.get("/regedit",controller.showRegedit);
app.post("/doRegedit",controller.doRegedit);
app.get("/login",controller.showLogin);
app.post("/doLogin",controller.doLogin);
app.post("/post",controller.doPost);

app.listen(3000);