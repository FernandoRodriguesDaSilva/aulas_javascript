let express = require('express');
let routes = express.Router();

routes.get('/',(req,res) => {

    res.statusCode = 200;
    res.setHeader('Content-Type','text/html');
    res.end('<h1>Olá mundo</h1>');
});

module.exports = routes;


/* 

npm init

npm install express --save 

npm install nodemon -g 

(nodemon index)

*/