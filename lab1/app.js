function notFound(response) {
    response.statusCode = 404;
    response.end("Page not found");
}

const http = require('http');

http.createServer(function (request, response) {
    response.setHeader('Content-Type', 'text/plain');
    switch (request.url.toLowerCase()) {
        case '/':
            {
                response.statusCode = 200;
                response.end('Home');
            } break;
        case '/curt':
            {
                response.statusCode = 200;
                response.end('Curt');
            } break;
        case '/products':
            {
                response.statusCode = 200;
                response.end('Products');
            } break;
        default: notFound(response);
            break;
    }
}).listen(3000, '127.0.0.1', function () {
    console.log("The server is listening on port 3000");
});