const express = require('express');
const fs = require("fs");
const path = require("path");

const app = express();

app.use(express.static(__dirname));

app.get('/', function(request, response){
    fs.readFile(path.join(__dirname, 'index.html'), 'utf8', function(error, data){
        if(error)
            throw error;
        response.end(data);
    });
});

app.listen(3000, function() {
    console.log('Сервер запущен на порту 3000');
});
