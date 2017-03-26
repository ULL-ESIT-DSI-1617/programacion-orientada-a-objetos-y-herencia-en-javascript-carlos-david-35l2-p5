"use strict";
let express = require('express'),
    app = express(),
    session = require('express-session');
let cookieParser = require('cookie-parser');
let util = require("util");

let bcrypt = require("bcrypt-nodejs");
let users = {
  juan : bcrypt.hashSync("juanpassword"),
  antonio : bcrypt.hashSync("antoniopassword")
};

//ruteo
app.get('/', function(req, res){
  console.log('peticion a la /')
});
app.use(cookieParser());
app.use(session({
    secret: 'Pruebas_Carlos_David',
    resave: true,
    saveUninitialized: true
}))

app.use(function(req, res, next) {
  console.log("Cookies :  "+util.inspect(req.cookies));
  console.log("session :  "+util.inspect(req.session));
  next();
});

//escuchar
var server = app.listen(8090, function () {
  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)

})
