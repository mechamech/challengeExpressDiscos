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
  img: "folk.png"
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

// (devuelve un arreglo con todas los géneros musicales disponibles)
router.get('/', function(req, res, next) {
    res.render('generos',{generos} );
});

// (trae todos los discos de un genero pasado por parametro)
router.get('/:id', function(req, res, next) {
    var id=req.params.id;
    let discosRender = discos.filter(disco => disco.genero == generos[id].genero);
    res.render('discos', {discosRender, titulo: generos[id].genero});
});

module.exports = router;