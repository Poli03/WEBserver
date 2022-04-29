const express = require('express');
const app = express();
const port = 8080;

//Servir contenido estatico  las tutas se hacen con la ruta publica
app.use(express.static('public'));

//si la ruta no existe entra aqui
/*app.get('/run', function (req, res) {
    res.send('Run')
});
  
app.get('*', function (req, res) {
  res.send('404 | Page not found')
});*/

app.get('*', function (req, res) {
    res.sendFile(__dirname + '/public/404.html');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})