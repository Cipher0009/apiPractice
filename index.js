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

const studentsRouter = require('./routes/students');
app.use('/students', studentsRouter);

app.use(bodyParser.json());

// app.get('/',function(req, res){
//          res.status(404).sendFile(__dirname+'/routes/index.html');
//       });

// Console output
app.listen(port, () => {
  console.log('App listening on port:' + port);
});
