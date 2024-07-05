const express = require('express');
const fs = require('fs');

const app = express();

const json = express.json();

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, PATCH, PUT, POST, DELETE, OPTIONS");
    next();
});

app.post('/addUser', json, function (request, response) {
    console.log(request.body);

    if (!request.body) return response.sendStatus(400);


    fs.access('users.txt', fs.constants.F_OK, (err) => {
        if (err) {
            let users = [
                {
                    login: request.body.login,
                    password: request.body.password
                }
            ];
            fs.writeFile('users.txt', JSON.stringify(users), (err) => {
                if (err) throw err;
                return response.sendStatus(200);
            });
        } else {
            fs.readFile('users.txt', 'utf8', (err, data) => {
                if (err) return response.sendStatus(500);

                let users = JSON.parse(data);
                for (let user of users) {
                    if (user.login === request.body.login && user.password === request.body.password) {
                        return response.sendStatus(400);
                    }
                }

                users.push({ login: request.body.login, password: request.body.password });

                fs.writeFile('users.txt', JSON.stringify(users), (err) => {
                    if (err) return response.sendStatus(500);
                    return response.sendStatus(200);
                });
            });
        }
    });
});

app.listen(3000, function () {
    console.log("Сервер слушает на порту 3000");
});