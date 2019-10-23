'use strict'
var loteSchema = require('../models/lote');
var GanadorSchema = require('../models/ganadores');

var mongoose = require('mongoose');

var controller = {

	loteria:function(req, res){
		return res.status(200).send({mesage: 'soy loteria'});
	},


	resultado:function(req,res){
		GanadorSchema.find({}).sort('-fechaSorteo').exec((e,resul)=>{
			if (e) 		return res.status(500).send({mensaje:  'error al retornar datos'});
			if (!resul) return res.status(404).send({mensaje:'no hay datos para mostrar'});

			return res.status(200).send({resul});
		});
	},

	soporte: function (req,res){
		loteSchema.countDocuments().exec((e, resul)=>{
			var rand = Math.floor(Math.random()*5 + 1);

			loteSchema.findOne().skip(rand).exec((e,resul)=>{
					if(e) return res.status(500).send({mensaje: 'Error al retornar el ganador'});
				  	if (!resul) return res.status(500).send({mensaje: 'no hay jugadores para mostrar'});

				  	return res.status(200).send({resul});
			});
		});
	},

	saveLote: function(req,res){
		var lote = new loteSchema();
		var param = req.body;
		
		var mes= ((new Date().getMonth())+1);
    	var dia = new Date().getDate();
    	var año = new Date().getFullYear();
		
		
		lote.nombre = param.nombre;
		lote.apellido = param.apellido;
		lote.correo = param.correo;
		lote.documento = param.documento;
		lote.numerodeJuego = param.numerodeJuego;
		lote.fechaDeRegistro = dia+'/'+mes+'/'+año;

		console.log(lote.numerodeJuego);
		
		

		lote.save((e,resul)=>{
			if(e) return res.status(500).send({mensaje :'error al guardar'});

			if(!resul) return res.status(404).send({mensaje: 'los datos estan vacios'});

			return res.status(200).send({lote:resul});
		});

		
	},

		saveGanador: function(req, res){
		var gana = new GanadorSchema();
		var param = req.body;
		
		gana.numeroSorteo = param.numeroSorteo;
		gana.fechaSorteo = param.fechaSorteo;

			
		

		gana.save((e,resul)=>{
			if(e) return res.status(500).send({mensaje :'error al guardar ganador'});

			if(!resul) return res.status(404).send({mensaje: 'los datos estan vacios'});

			return res.status(200).send({gana:resul});
		});

		
		
	},

		deleteData: function(req, res){
		var loteID = req.params.fecha;
console.log(loteID);
		LoteSchema.findByIdAndDelete(loteID,(e, resul)=>{
			if (e)      return res.status(500).send({mensaje:'Erro al eliminar el proyecto'});
			if (!resul) return res.status(404).send({mensaje:'no se encontro el proyecto'});
			return res.status(200).send({
				mensaje:'Proyecto borrado'
			})
		});
	}

}

module.exports = controller;