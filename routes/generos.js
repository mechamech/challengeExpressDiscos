const express = require('express');
const router = express.Router();
const data = require('./data');

// (devuelve un arreglo con todas los géneros musicales disponibles)
router.get('/', function(req, res, next) {
  res.render('generos', data );
});

// (trae todos los discos de un genero pasado por parametro)
router.get('/:id', function(req, res, next) {
  let id = req.params.id;
  let discos = data.discos.filter(disco => disco.genero == data.generos[id].genero);
  res.render('discos', {...data, discos} );
});

module.exports = router;
