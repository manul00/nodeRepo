'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var LoteSchema = Schema({

	nombre: String,
	apellido: String,
	correo:String,
	documento:String,
	numerodeJuego:Number,
	fechaDeRegistro:String

});

module.exports = mongoose.model('Lote',LoteSchema);