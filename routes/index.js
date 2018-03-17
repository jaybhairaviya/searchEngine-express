var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  if(req.session.uid){
    res.render('index',{title:"asda",isLogged:true});
  }
  else{
    res.render('index',{title:"asda",isLogged:false});
  }
});

module.exports = router;
