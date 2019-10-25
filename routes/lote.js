'use strict'

var express = require ('express');
var loteController = require('../controller/lote');
var loginController = require('../controller/login');
var router = express.Router();

router.get('/loteria',loteController.loteria);
//router.get('/resultado',loteController.resultado);
router.post('/registrar', loteController.saveLote);
router.delete('/delete/:fecha', loteController.deleteData);
router.get('/consulta',loteController.soporte);
router.post('/agregarGanador',loteController.saveGanador);
router.get('/login',loginController.loggear);

module.exports = router;