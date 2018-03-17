var express = require('express');
var router = express.Router();
var controller = require('../controllers/users');
/* GET home page. */
router.get('/', function(req, res, next) {
  if(req.session.uid){
    controller.getById(req.session.uid,function(user){
      if(user){
        res.render('index',{isLogged:true,username:user.username});
      }
      else {
        delete req.session.uid;
        res.render('index',{isLogged:false});
      }
    });
  }
  else {
    res.render('index',{isLogged:false});
  }
});


module.exports = router;
