const express = require('express');
const router = express.Router();
const data = require('./data');

// (trae todos los discos)
router.get('/', function(req, res, next) {
  res.render('discos', {...data, titulo: "Todos los discos"} );
});

// (trae el detalle de un disco particular)
router.get('/:id', function(req, res, next) {
  let id = req.params.id;
  let disco = data.discos.find(disco => disco.id == id);
  res.render('disco', {...data, disco});
});

module.exports = router;
