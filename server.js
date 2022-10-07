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

server.get('/contacts', (req,res) => {
    Contacts = [
    {
        'Name': 'William',
        'Age': '19' 
        
    }];
    res.writeHead(200, {'Content-Type': 'text/json'});
    res.write(JSON.stringify(Contacts));
    res.end();
});

server.listen(8080);

console.log('Server is up and running... on port 8080');