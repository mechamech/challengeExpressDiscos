var express = require('express');
var router = express.Router();

var generos =["Rock","Soul","Folk","Clasico"]

var discos=[{id:"0",
    nombre: "Unplugged",
    artista:"Alejandro Sanz",
    genero:generos[0],
    img: "unplugged.png"},
    {id:"1",
    nombre: "Nevermind",
    artista:"Nirvana",
    genero:generos[0],
    img: "nevermind.png"},
    {id:"2",
    nombre: "The Wall",
    artista:"Pink Floyd",
    genero:generos[0],
    img: "thewall.png"},
    {id:"3",
    nombre: "Aretha Now",
    artista:"Aretha Franklin",
    genero:generos[1],
    img: "arethanow.png"},
    {id:"4",
    nombre: "Back to Black",
    artista:"Amy Winehouse",
    genero:generos[1],
    img: "backtoblack.png"},
]

/* GET home page. */
// (debe cargar la home con los discos favoritos)
router.get('/', function(req, res, next) {
    
});

// (devuelve un arreglo con todas los géneros musicales disponibles)
router.get('/genero', function(req, res, next) {
    res.render('generos',{generos} );
});

// (trae todos los discos)
router.get('/discos', function(req, res, next) {
  res.render('discos',{discos} );
});

// (trae el detalle de un disco particular)
router.get('/discos/:id', function(req, res, next) {
    var id=req.params.id;
    var disco = discos.find((disco)=> {return disco.id == id})    
    res.render('x',{disco} );
});

// (trae todos los discos de un genero pasado por parametro)
router.get('/discos/generos/:id', function(req, res, next) {
    var id=req.params.id;

    res.render('x',{} );
});

module.exports = router;

