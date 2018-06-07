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
  genero:generos[0].genero,
  img: "issues.jpg"
},{
  id:"2",
  nombre:"Aha shake heartbreak",
  artista:"KINGS OF LEON",
  genero:generos[0].genero,
  img: "aha.jpg"
},{
  id:"3",
  nombre:"I",
  artista: "ZAPP",
  genero:generos[1].genero,
  img: "i.jpg"
},{
  id:"4",
  nombre: "The Ray Charles Story",
  artista:"RAY CHARLES",
  genero:generos[1].genero,
  img: "raycharles.jpg"
},{
  id:"5",
  nombre:"Mingus ah um" ,
  artista:"CHARLES MINGUS",
  genero:generos[2].genero,
  img: "mingus.jpg"
},{
  id:"6",
  nombre:"Big fun" ,
  artista:"MILES DAVIS",
  genero:generos[2].genero,
  img: "bigfun.jpg"
},{
  id:"7",
  nombre:"Glassworks" ,
  artista:"PHILIP GLASS",
  genero:generos[3].genero,
  img: "glassworks.jpg"
},{
  id:"8",
  nombre:"Canto ostinato" ,
  artista:"SIMEON TEN HOLT",
  genero:generos[3].genero,
  img:"cantoostinato.jpg"
}];

router.post('/', function(req, res, next) {
  let parametroSearch = req.body.value;
  let discosRender = discos.filter(disco => JSON.stringify(disco).toLowerCase().indexOf(parametroSearch.toLowerCase()) >= 0)
  console.log(discosRender);
  res.json({data: JSON.stringify(discosRender)})
});

module.exports = router;
