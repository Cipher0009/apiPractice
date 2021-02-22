const express = require('express'),
  router = express.Router();
  
router.get('/',function(req, res){
    res.sendFile(__dirname+'/index.html');
 });
// get user lists
router.get('/list', function(req, res) {
  let sql = `SELECT * FROM students`;
  con.query(sql, function(err, data, fields) {
    if (err) throw err;
    res.json({
      status: 200,
      data,
      message: "Students retrieved successfully"
    })
  })
});

// get user StudentDetails
router.get('/studentdetails', function(req, res) {
    let sql = `SELECT * FROM students`;
    con.query(sql, function(err, data, fields) {
      if (err) throw err;
      res.json({
        status: 200,
        data,
        message: "Students retrieved successfully"
      })
    })
  });

// create new student
router.post('/new', function(req, res) {
  let sql = `INSERT INTO users(id, fname, lname, university, homeAddress, mobileNumber) VALUES (?)`;
  let values = [
    req.body.id,
    req.body.fname,
    req.body.lname,
    req.body.university,
    req.body.homeAddress,
    req.body.mobileNumber
  ];
  con.query(sql, [values], function(err, data, fields) {
    if (err) throw err;
    res.json({
      status: 200,
      message: "New student added successfully"
    })
  })
});

module.exports = router;