var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('Hola, soy la pagina de cntacto');
    res.render('contacto') //contacto.hbs
});

module.exports = router;
