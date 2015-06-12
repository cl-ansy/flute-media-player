var express = require('express');
var app     = express();

app.use(express.static('dist'));

app.get('/', function(req, res) {
    res.sendFile('dist/index.html', { root: __dirname });
});

var server = app.listen(3000, function(req, res) {
    var host = server.address().address;
    var port = server.address().port;

    console.log('App listening at http://%s:%s', host, port);
});
