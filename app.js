//======================================
// get all the packages we need ============
//======================================
var express = require('express');
var mongoose = require('mongoose');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var logger = require('morgan');
var jwt = require('jsonwebtoken');
var path = require('path');
var fs = require('fs');
var multer = require('multer');
var upload = multer({ dest: 'uploads/' })

var app = express();

//======================================
// Connect to Client ===================
//======================================
app.use(express.static('./client'));
app.get('/', function(req, res){
    res.sendFile(__dirname+"/client/index.html");
})
app.use(logger('dev'));
app.use(cookieParser());
app.use(bodyParser());
app.use(bodyParser.urlencoded({ extended: false }));
//======================================
//setup mongodb connection =============
//======================================
var dbURI = 'mongodb://localhost/helloDeskDB';
mongoose.connect(dbURI);
mongoose.connection.once('connected', function(){
    console.log(dbURI + ' Database connected')
});

//======================================
//include all model files using fs modules ===
//======================================
fs.readdirSync('./server/app/models').forEach(function(file){
    //check if file has .js extension
    if(file.indexOf('.js'));
    require('./server/app/models/' + file);
});


//======================================
//include all controllers files using fs modules ===
//======================================
fs.readdirSync('./server/app/controllers').forEach(function(file){
    //check if file has js extension
    if(file.indexOf('.js'));
    var route = require('./server/app/controllers/' + file);
    route.Controller(app);

})

app.listen(3080)


