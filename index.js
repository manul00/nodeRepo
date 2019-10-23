'use strict'
var express = require ('express');
var app = express();

app.set('port',(process.env.PORT || 8080))

app.get('/', (req, res)=>{
	res.json({mesage:'servidor corriendo'});
});



app.listen(app.get('port'));