'use strict'

var adminSchema = require('../models/admin');
var mongoose = require('mongoose');

var controller = {
	loggear: function(req, res){
		adminSchema.find({admin:'admin'}).exec((e,resul)=>{
			if(e) return res.status(500).send({mesage: 'error al retornar los datos'});
			if(!resul) return res.status(404).send({mesage: 'no se encontro el usuario'});

			return res.status(200).send({resul})
		});

	}
}

module.exports = controller;