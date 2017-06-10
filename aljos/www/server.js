/*// importamos express (el paquete para levantar un servidor web)
var express = require('express');
// creamos un instancia de express
var app = express();
// Definimos una ruta '/'
app.get('/', function (req, res) {});
// Definimos que la instancia de express escuche en el puerto 3000
app.listen(3000, function() {
// Esta función se ejecuta una vez que el servidor web está corriendo
// Ver esto en consola significa que el servidor está corriendo
console.log('Servidor corriendo en 127.0.0.1:3000');
});*/
var http = require('http'),
    fs = require('fs');


fs.readFile('./index.html', function (err, html) {
    if (err) {
        throw err;
    }
    http.createServer(function(request, response) {
        response.writeHeader(200, {"Content-Type": "text/html"});
        response.write(html);
        response.end();
    }).listen(8000);
});
console.log("Servidor http://localhost:8000");
