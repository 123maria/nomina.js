var http = require('http');
var path = require('path');
var fs = require('fs');

var mimeType = {
    '.js': 'text/javasript',
    '.html': 'text/html',
    '.css': 'text/css'

};

http.createServer(function (req, res) {
    var buscar = path.basename(decodeURI(req.url)) || 'menu.html',
    f = 'modulo/' + buscar; 
    fs.exists(f, function (exists) {
        if (exists) {
            fs.readFile(f, function (err, data) {
                if (err) { res.writeHead(500); res.end('Error del servidor'); return; }
                var headers = { 'content-type': mimeType[path.extname(buscar)] };
                res.writeHead(200, headers);
                res.end(data);
            });
            return;
        }
        res.writeHead(400);
        res.end('Pagina no encontrada');
    });




}).listen(process.env.PORT || 8080);