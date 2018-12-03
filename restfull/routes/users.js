let express = require('express')
let routes = express.Router();

routes.get('/',(req,res)=> {

   res.statusCode = 200;
   res.setHeader('Content-Type','application/json');
   res.json({
    user:[{
        id: 1,
        name: 'Fernando',
        email:'fernandinhosns@hotmail.com'
    }]
});
});

routes.get('/admin',(req,res)=>{
	res.statusCode = 200;
   res.setHeader('Content-Type','application/json');
   res.json({
    user:[
       
    ]
});
});

module.exports = routes;
