const http = require('http');

http.createServer((req,res) => {

    //console.log(req);
    //res.writeHead(200, {'Content-Type': 'aplicaction/json'})

   /* const jsony={
        name:'yo',
        number:20
    }
    res.write(JSON.stringify(jsony));*/
    res.setHeader('Content-Disposition', 'attachment; filename=lista.csv');
    res.writeHead(200, {'Content-Type': 'aplicaction/csv'});
    res.write('id,nombre\n');
    res.write('1, Maria\n');
    res.write('2, Pedro\n');
    res.write('3, Luis\n');

    res.end();
})
.listen(8080);

console.log('Escuchando en el puerto',8080)