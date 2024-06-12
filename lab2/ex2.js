const parser = require('./parser.js');
const express = require('express');

const app = express();

app.get('/ex2', function (request, response) {
    let obj = parser.parser('D:\\Node js tasks\\lab2\\text.txt');
    let str = '';
    for (let item in obj)
        str += `${item}: ${obj[item]}\n`;
    response.end(str);
});

app.listen(3000);