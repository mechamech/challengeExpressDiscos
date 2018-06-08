const express = require('express');
const router = express.Router();
const data = require('./data');

var usuarios=[];

router.get('/', function(req, res, next) {
    res.render('ingreso', data);
});

router.post('/login', function(req, res, next) {
    var usuario= usuarios.find((usuario)=> {return usuario.email == req.body.email && usuario.password==req.body.password})
    if(usuario){
        res.redirect('/');
    }else{
        res.send(404);
    }
});

router.post('/nuevo', function(req, res, next) {
    usuarios.push({nombre: req.body.nombre,email: req.body.email,password:req.body.password});
    res.redirect('/');
});

module.exports = router;
