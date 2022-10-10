const { response } = require('express');
const express = require('express');
const fs = require('fs');

const server = express();
server.use(express.static('public'));

server.get("/", (req,res) => {
    fs.readFile('index.html', (err, data) => {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    });
});

server.post('/', (req,res) => {
    console.log(req.forms);
    res.send('OK!');
});

server.get('/contacts', (req,res) => {
    fs.readFile('data.json', (err, data) => {
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.write(data);
    res.end();
    });
});

server.listen(8080);

console.log('Server is up and running... on port 8080');