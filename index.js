'use strict'
var express = require ('express');
var app = express();
var mongoose = require('mongoose');

app.set('port',(process.env.PORT || 8080))

app.get('/', (req, res)=>{
	res.json({mesage:'servidor corriendo'});
});

mongoose.Promise = global.Promise;




mongoose.connect('mongodb+srv://manul00:manolo1234@cluster0-eo1av.mongodb.net/projects?retryWrites=true&w=majority')
//mongoose.connect('mongodb://localhost:27017/projects')
.then(()=>{
	console.log('conexion exitosa ');

	//creacion del servido
	app.listen(app.get('port'));

})
.catch(e =>{console.log(e);});

