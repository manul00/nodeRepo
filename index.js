'use strict'
var express = require ('express');
var app = express();
var mongoose = require('mongoose');
var loteSchema = require('./models/lote');
var GanadorSchema = require('./models/ganadores');

app.set('port',(process.env.PORT || 8080))

app.get('/', (req, res)=>{
	res.json({mesage:'servidor corriendo'});
});




app.get('/resultado', (req, res)=>{
		GanadorSchema.find({}).sort('-fechaSorteo').exec((e,resul)=>{
			if (e) 		return res.status(500).send({mensaje:  'error al retornar datos'});
			if (!resul) return res.status(404).send({mensaje:'no hay datos para mostrar'});

			return res.status(200).send({resul});
		});
	});
mongoose.Promise = global.Promise;


mongoose.connect('mongodb+srv://manul00:manolo1234@cluster0-eo1av.mongodb.net/projects?retryWrites=true&w=majority')
//mongoose.connect('mongodb://localhost:27017/projects')
.then(()=>{
	

	//creacion del servido
	app.listen(app.get('port'));
	console.log(app.get('port'));
	console.log('conexion exitosa al servidor');



})
.catch(e =>{console.log(e);});

