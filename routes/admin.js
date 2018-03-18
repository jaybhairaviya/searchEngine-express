var express = require('express');
var FileModel = require('../models/files');
var router = express.Router();

router.get('/',function(req,res,next){
  if (req.session.u_role && req.session.uid) {
    FileModel.find({},{_id : 1,originalname : 1,path : 1,tags : 1}).lean().exec(function(err,data){
      res.render('admin',{isLogged:true,data:data});
    })
  }
  else {
    res.redirect('/');
  }
});

module.exports = router;
