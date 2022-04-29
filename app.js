const express = require('express');
require('dotenv').config();
const app = express();
const hbs = require('hbs');
const port = process.env.PORT;

app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials', function (err) {});

//Servir contenido estatico  las tutas se hacen con la ruta publica
app.use(express.static('public'));

app.get('/', function (req, res) {
  res.render('home', {
    name: 'Hipolito Mendoza',
    title: 'Aplicacion con Node'
  });
})

app.get('/elements', function (req, res) {
  res.render('elements', {
    name: 'Hipolito Mendoza',
    title: 'Aplicacion con Node'
  });
})

app.get('/generic', function (req, res) {
  res.render('generic', {
    name: 'Hipolito Mendoza',
    title: 'Aplicacion con Node'
  });
})

app.get('*', function (req, res) {
    res.send('404 Error');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})