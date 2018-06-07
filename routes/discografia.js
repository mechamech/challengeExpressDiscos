var express = require('express');
var router = express.Router();

var usuarios=[{nombre:"Mecha",
     email:"mecha@gmail.com",
     password:"mecha"},
     {nombre:"Georgina",
     email:"georgi@gmail.com",
     password:"georgi"},
     {nombre:"Débora",
     email:"debo@gmail.com",
     password:"debo"},
    ];

// (devuelve un arreglo con todas los géneros musicales disponibles)
router.get('/generos', function(req, res, next) {
    res.render('generos',{generos} );
});

// (trae todos los discos)
router.get('/discos', function(req, res, next) {
    res.render('discos',{discos} );
});

// (trae el detalle de un disco particular)
router.get('/discos/:id', function(req, res, next) {
    var id=req.params.id;
    var disco = discos.find((disco)=> {return disco.id == id});
    res.render('disco',{disco} );
});

// (trae todos los discos de un genero pasado por parametro)
router.get('/generos/:id', function(req, res, next) {
    var id=req.params.id;
    discos = discos.filter(disco => disco.genero == generos[id].genero);
    res.render('discos', {discos} );
});

router.post('/nuevo', function(req, res, next) {
    usuarios.push({nombre: req.body.nombre,email: req.body.email,password:req.body.password});
    res.redirect('/');
    console.log(usuarios)
});

router.post('/login', function(req, res, next) {
    var usuario= usuarios.find((usuario)=> {return usuario.email == req.body.email && usuario.password==req.body.password})
    if(usuario){
        res.redirect('/');
    }else{
        res.send("")
    }
});

router.get('/registro', function(req, res, next) {
    res.render('registro');
});

module.exports = router;
