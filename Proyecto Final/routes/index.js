var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

// ENVIO DE FORMULARIO
router.post('/', async (req,res,next)=>{
  var nombre = req.body.nombre;
  var apellido = req.body.apellido;
  var email = req.body.email;
  var opcion = req.body.opcion
  var telefono = req.body.telefono;
  var mensaje = req.body.mensaje;

  var obj = {
    to: 'gimafru@gmail.com',
    subject: '',
    html: "La persona: " + nombre + " " + apellido + " se contacto a traves de la pagina web por el motivo " + opcion + 
    ". Aportando el siguiente mensaje:' " + mensaje + "'. Y espera una resuesta mediante mail:" + email + " o por mensaje al número:" + telefono
  }
  var transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
  })

  var info = await transporter.sendMail(obj);
  res.render('index', {
    message: 'Mensaje enviado correctamente'
  });
});

module.exports = router;
