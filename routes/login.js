var express = require('express');
var controller = require('../controllers/users');
var router = express.Router();

router.get('/',function(req,res,next){
  res.redirect('/');
});

router.post('/',function(req,res,next){
  if (controller.authenticate(req,res,function(user){
    if(user){
      req.session.uid = user._id;
      console.log("success");
      res.redirect('/');
    }
    else res.render('index',{isLogged:false,message:"Please check username and password"});
  }));
});

module.exports = router;
