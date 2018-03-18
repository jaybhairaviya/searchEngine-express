var express = require('express');
var router = express.Router();
var controller = require('../controllers/users');
/* GET home page. */
router.get('/', function(req, res, next) {
  if(req.session.uid){
    controller.getById(req.session.uid,function(user){
      if(user){
        var success = req.cookies.success;
        res.clearCookie('success');
        res.render('index',{isLogged:true,username:user.username,success:success});
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
