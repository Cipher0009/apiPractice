const port = process.env.PORT || 5000;
const express = require('express'),
 app = express(),
 mysql = require('mysql'),
 bodyParser = require('body-parser');

 //database setup
 var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "CogPassword3",
    database: "databaseone"
});

// var http = require('http');

// var controller = require('./api/controller.js');
// var transit = require('./api/wiki.js');

// const bodyParser = require('body-parser');
// app.use(bodyParser.urlencoded({extended: false}));
const studentsRouter = require('./routes/students');
app.use('/students', studentsRouter);
// app.use((req, res,next)=>{
//          res.status(404).send('<h1> Page not found </h1>');
//       });
app.use(bodyParser.json());

app.get('/',function(req, res){
         res.status(404).send('<h1> Page in progress </h1>');
      });
// Console output
app.listen(port, () => {
  console.log('App listening on port:' + port);
});
