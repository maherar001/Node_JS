const http = require("http");
const fs = require('fs');
const _ = require('lodash');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);

    const num = _.random(0, 20);
    console.log(num);

    const great = _.once(() => {
        console.log('Hello Hafiz..!');
    });

    great();
    great();

    //paths

    let path = './views/';
    switch(req.url){
        case '/':
        case '/home':
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;
        case '/about-me':
            path += 'about.html';
            res.statusCode = 301;
            res.setHeader('Location', '/about');
            res.end();
            break;
        default:
            path += '404.html';
            res.statusCode = 404;
            break;
    }

    //set header content type
    res.setHeader("Content-Type", "text/html");

    fs.readFile(path, (err, data) => {
        if(err){
            console.log(err);
            res.end();
        }
        else{
            res.end(data);
        }
    })

    });

    server.listen(3000, 'localhost', () => {
        console.log('listening for requests on port 3000');
    }); 