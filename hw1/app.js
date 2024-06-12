const http = require('http');

http.createServer(function (request, response) {
    response.setHeader('Content-Type', 'text/plain');
    
    const fullUrl = `http://${request.headers.host}${request.url}`;

    let parsedUrl = new URL(fullUrl);

    let host = parsedUrl.host;
    let pathname = parsedUrl.pathname;
    let searchParams = parsedUrl.searchParams;

    let params = '';
    searchParams.forEach((value, key) => {
        params += `  ${key}: ${value}\n`;
    });

    response.end(`Host: ${host}\nPathname: ${pathname}\nSearch Parameters:\n${params}`);
}).listen(3000, '127.0.0.1', function(){
    console.log('The server is listening!');
});
