const { log } = require('console');
const express = require('express');
const fs = require('fs');

const app = express();

app.use(express.raw({type:'application/json'}));

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); 
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });

app.post('/getTodos', function(req, res){
    log('allo');
    let values = "";
    fs.readFile('./todos.json', 'utf8', function(err, data){
        log('allo');
        if(err)
            res.sendStatus(err.code);
        values = data;
        log(values);
        if(values == "")
            res.end('[]');
        else{
            res.end(values);
        }
    });
});

app.post('/setTodos', function(req, res){
    const values = req.body.toString();
    fs.writeFile('./todos.txt', values, function(err){
        if(err)
            res.sendStatus(err.code);
        else
            res.sendStatus(200);
    });
});

app.listen(3000, function(){
    log('listening');
});