var express = require('express');
var router = express.Router();

var usr = [
{
  email: 'xyz@gmail.com', password: 'password'
}
]


/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("Welcome to backend !")
});


router.post('/login', function(req, res){
  let rslt = usr.find(user => user.email == req.body.email);
  if(rslt){
    if(rslt.password == req.body.password){
      res.status(200).send({
        message: "Successful Login!"
      })
    }
    else{
      res.status(200).send({
        message: "Incorrect Password!"
      })
    }
  }
  else{
    res.status(200).send({
      message: "User Not Found!"
    })
  }
});

module.exports = router;