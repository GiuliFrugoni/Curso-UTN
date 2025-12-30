var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

/* GET home page */
router.get('/', function (req, res, next) {
  res.render('index');
});

/* POST formulario */
router.post('/', async function (req, res, next) {
  try {
    var nombre = req.body.nombre;
    var apellido = req.body.apellido;
    var mail = req.body.mail;
    var telefono = req.body.telefono;
    var select = req.body.select
    var mensaje = req.body.texto;

    console.log(req.body);

    var transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    });

    var obj = {
      to: 'gimafru@gmail.com',
      subject: 'Contacto de pastelería',
      html:
       nombre + ' ' + apellido +
        ' se contactó a través de la web por el motivo ' + select + ' y quiere más información a este correo: ' +
        mail +
        '.<br>Mensaje: ' + mensaje +
        '.<br>Teléfono: ' + telefono
    };

    await transporter.sendMail(obj);

    res.render('index', {
      message: 'Mensaje enviado correctamente'
    });
    
  } catch (error) {
    console.error(error);
    res.render('index', {
      message: 'Su mensaje fue enviado correctamente'
    });
  }
});

module.exports = router;
