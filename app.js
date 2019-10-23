'use strict'

var express = require ('express');
var bodyParser= require ('body-parser');
var router = require('./routes/lote');
var cors = require('cors');
var app = express();

//cargar archivos rutas

//midlewares

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


//cors

app.use(cors());

//rutas 
app.use('/',router);

module.exports = app;