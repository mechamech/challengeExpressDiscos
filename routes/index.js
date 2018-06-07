var express = require('express');
var router = express.Router();

var generos =[{
  genero: "Rock",
  img: "rock.png"
},{
  genero: "Soul",
  img: "soul.png"
},{
  genero: "Jazz",
  img: "jazz.png"
},{
  genero: "Clásico",
  img: "classical.png"
}];

var discos = [{
  id:"1",
  nombre:"Issues",
  artista:"KORN",
  genero:generos[0],
  img: "issues.jpg"
},{
  id:"2",
  nombre:"Aha shake heartbreak",
  artista:"KINGS OF LEON",
  genero:generos[0],
  img: "aha.jpg"
},{
  id:"3",
  nombre:"I",
  artista: "ZAPP",
  genero:generos[1],
  img: "i.jpg"
},{
  id:"4",
  nombre: "The Ray Charles Story",
  artista:"RAY CHARLES",
  genero:generos[1],
  img: "raycharles.jpg"
},{
  id:"5",
  nombre:"Mingus ah um" ,
  artista:"CHARLES MINGUS",
  genero:generos[2],
  img: "mingus.jpg"
},{
  id:"6",
  nombre:"Big fun" ,
  artista:"MILES DAVIS",
  genero:generos[2],
  img: "bigfun.jpg"
},{
  id:"7",
  nombre:"Glassworks" ,
  artista:"PHILIP GLASS",
  genero:generos[3],
  img: "glassworks.jpg"
},{
  id:"8",
  nombre:"Canto ostinato" ,
  artista:"SIMEON TEN HOLT",
  genero:generos[3],
  img:"cantoostinato.jpg"
}];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { generos, discos });
});

module.exports = router;
