ganadores.js'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var GanadoresSchema = Schema({

	fechaSorteo:String,
	numeroSorteo:String

});

module.exports = mongoose.model('Ganadore',GanadoresSchema);