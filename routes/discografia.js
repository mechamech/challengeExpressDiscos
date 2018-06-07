var express = require('express');
var router = express.Router();

var generos =["Rock","Soul","Jazz","Clasico"]

var discos=[
    {id:"1",
    nombre:"Issues",
    artista:"KORN",
    genero:generos[0],
    img: "issues.jpg"},
    {id:"2",
    nombre:"Aha shake heartbreak",
    artista:"KINGS OF LEON",
    genero:generos[0],
    img: "aha.jpg"},
    {id:"3",
    nombre:"I",
    artista: "ZAPP",
    genero:generos[1],
    img: "i.jpg"},
    {id:"4",
    nombre: "The Ray Charles Story",
    artista:"RAY CHARLES",
    genero:generos[1],
    img: "raycharles.jpg"},
    {id:"5",
    nombre:"Mingus ah um" ,
    artista:"CHARLES MINGUS",
    genero:generos[2],
    img: "mingus.jpg"},
    {id:"6",
    nombre:"Big fun" ,
    artista:"MILES DAVIS",
    genero:generos[2],
    img: "bigfun.jpg"},
    {id:"7",
    nombre:"Glassworks" ,
    artista:"PHILIP GLASS",
    genero:generos[3],
    img: "glassworks.jpg"},
    {id:"8",
    nombre:"Canto ostinato" ,
    artista:"SIMEON TEN HOLT",
    genero:generos[3],
    img:"cantoostinato.jpg"},    
]

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

/* GET home page. */
// (debe cargar la home con los discos favoritos)
router.get('/', function(req, res, next) {
            
});

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
    var disco = discos.find((disco)=> {return disco.id == id})   
    res.render('disco',{disco} );
});

// (trae todos los discos de un genero pasado por parametro)
router.get('/discos/generos/:id', function(req, res, next) {
    var id=req.params.id;  
    discos = discos.filter(disco => disco.genero == generos[id]);
    res.render('genero',{discos} );
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






// posicion post error validacion registroroutelink formpug repoada