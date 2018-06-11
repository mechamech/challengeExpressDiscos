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
        res.render('index', {...data, usuario:usuario.nombre});
    }else{
        res.render('notfind', {...data, titulo: "El usuario o la contraseña son incorrectos..."});
    }
});

router.post('/nuevo', function(req, res, next) {
    usuarios.push({nombre: req.body.nombre,email: req.body.email,password:req.body.password});
    // res.redirect('/');
    res.render('ingreso', {...data });
});

module.exports = router;
