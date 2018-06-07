var express = require('express');
var router = express.Router();

router.get('/registro', function(req, res, next) {
    res.render('registro');
});

router.get('/nuevoUsuario', function(req, res, next) {
    res.render('nuevoUsuario');
});

router.post('/nuevo', function(req, res, next) {
    usuarios.push({nombre: req.body.nombre,email: req.body.email,password:req.body.password});
    res.redirect('');
});

router.post('/login', function(req, res, next) {
    var usuario= usuarios.find((usuario)=> {return usuario.email == req.body.email && usuario.password==req.body.password})
    if(usuario){
        res.redirect('');
    }else{
        res.send("")
    }
});



router

module.exports = router;
