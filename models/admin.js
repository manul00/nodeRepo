'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var adminSchema = Schema({

	admin:String,
	clave:String

});

module.exports = mongoose.model('Admine',adminSchema);