var express = require('express');
var router = express.Router();
var fs = require('fs');
var FileModel = require('../models/files');
router.use('/',function(req,res,next){
  if (req.session.uid && req.session.u_role) {
    next();
  }
  else {
    res.redirect('/')
  }
})
router.get('/:fid',function(req,res,next){
  FileModel.findOne({_id: req.params.fid},function(err,doc){
    fs.unlink('./'+doc.path,function(error){
      if(error) console.log(error);
      console.log("removed");
    })
  }).remove({_id: req.params.fid}).exec(function(){
    res.redirect('/admin');
  });
})

module.exports = router;
