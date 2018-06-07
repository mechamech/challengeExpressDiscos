var express = require('express');
var router = express.Router();

var generos =[{genero: "Rock", img: "rock.png"},
              {genero: "Soul", img: "soul.png"},
              {genero: "Folk", img: "folk.png"},
              {genero: "Clásico", img: "classical.png"}];

var discos=[{id:"0",
    nombre: "Unplugged",
    artista:"Alejandro Sanz",
    genero:generos[0],
    img: "/images/unplugged.png"},
    {id:"1",
    nombre: "Nevermind",
    artista:"Nirvana",
    genero:generos[0],
    img: "/images/nevermind.png"},
    {id:"2",
    nombre: "The Wall",
    artista:"Pink Floyd",
    genero:generos[0],
    img: "/images/thewall.png"},
    {id:"3",
    nombre: "Aretha Now",
    artista:"Aretha Franklin",
    genero:generos[1],
    img: "/images/arethanow.png"},
    {id:"4",
    nombre: "Back to Black",
    artista:"Amy Winehouse",
    genero:generos[1],
    img: "/images/backtoblack.png"},
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { generos, discos });
});

module.exports = router;
