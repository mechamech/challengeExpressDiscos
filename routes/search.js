const express = require('express');
const router = express.Router();
const data = require('./data');

// router.post('/', function(req, res, next) {
//   let parametroSearch = req.body.value;
//   discosRender = discos.filter(disco => JSON.stringify(disco).toLowerCase().indexOf(parametroSearch.toLowerCase()) >= 0)
//   res.json({data: JSON.stringify(discosRender)})
// });

// router.get('/ajax/:search', function(req, res, next) {
//   let inputText = req.params.search;
//   discos = data.discos.filter(disco => JSON.stringify(disco).toLowerCase().indexOf(inputText.toLowerCase()) >= 0);
//   if (discos.length) {
//     res.render('discSearch', {...data, discos, titulo: `Tu búsqueda "${inputText}" produjo los siguientes resultados:`, inputText })
//   } else {
//     res.render('notfind', {...data, titulo: "Lo sentimos! No se encontraron coincidencias...", inputText} )
//   }
// });

function findMatch(words, disc) {
  const discString = JSON.stringify(disc).toLowerCase();
  return words.every(word => discString.indexOf(word) >= 0 );
};

router.get('/:search', function(req, res, next) {
  let inputText = req.params.search;
  let inputWords = inputText.split(" ");
  discos = data.discos.filter(disco => findMatch(inputWords, disco));
  if (discos.length) {
    res.render('discos', {...data, discos, titulo: `Tu búsqueda "${inputText}" produjo los siguientes resultados:`, inputText })
  } else {
    res.render('notfind', {...data, titulo: "Lo sentimos! No se encontraron coincidencias...", inputText} )
  }
});

module.exports = router;
