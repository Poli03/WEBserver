const express = require('express');
const app = express();
const port = 8080;

//Servir contenido estatico  las tutas se hacen con la ruta publica
app.use(express.static('public'));

app.get('/elements', function (req, res) {
  res.sendFile(__dirname + '/public/elements.html');
})

app.get('/generic', function (req, res) {
  res.sendFile(__dirname + '/public/generic.html');
})

app.get('*', function (req, res) {
    res.send('404 Error');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})