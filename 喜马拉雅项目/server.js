require('express')().get('*', function (req, res) {
    res.sendFile(__dirname + req.path);
}).listen(8888);
